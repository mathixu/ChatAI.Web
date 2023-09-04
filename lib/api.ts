import axios from "axios";
import Cookies from "js-cookie";
import Logout from "@/lib/functions/logout";

export default axios.create({
    baseURL: "https://api.chatai.mathixu.dev",
    headers: { "Content-Type": "application/json" },
});

export const axiosAuth = axios.create({
    baseURL: "https://api.chatai.mathixu.dev",
    headers: { "Content-Type": "application/json" },
});


axiosAuth.interceptors.request.use(
    async (config) => {
        const token = Cookies.get("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

let isRefreshing: boolean = false;
interface PromiseQueueItem {
    resolve: (value?: string | null) => void;
    reject: (reason?: any) => void;
}
let failedQueue: PromiseQueueItem[] = [];

const processQueue = (error: any, token: string | null = null): void => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

axiosAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (originalRequest.url === '/auth/refresh') {
            Logout();
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers.Authorization = 'Bearer ' + token;
                    return axiosAuth(originalRequest);
                }).catch(err => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;
            const refreshToken = Cookies.get("refresh_token");

            return axiosAuth.post("/auth/refresh", { refreshToken })
                .then((res) => {
                    if (res.status === 201) {
                        Cookies.set("access_token", res.data.accessToken, { expires: 30, secure: true });
                        Cookies.set("refresh_token", res.data.refreshToken, { expires: 30, secure: true });
                        Cookies.set("user", JSON.stringify(res.data), { expires: 30, secure: true });

                        axiosAuth.defaults.headers.common["Authorization"] =
                            "Bearer " + res.data.accessToken;

                        processQueue(null, res.data.accessToken);
                        return axiosAuth(originalRequest);
                    }
                })
                .catch((error) => {
                    processQueue(error, null);
                    Logout();
                    return Promise.reject(error);
                })
                .finally(() => {
                    isRefreshing = false;
                });
        }

        return Promise.reject(error);
    }
);