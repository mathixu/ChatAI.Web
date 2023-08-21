import axios, {AxiosResponse} from "axios";
import Cookies from "js-cookie";
import Logout from "@/lib/logout";

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
            originalRequest._retry = true;

            const refreshToken = Cookies.get("refresh_token");

            return axiosAuth
                .post("/auth/refresh", {refreshToken})
                .then((res: AxiosResponse) => {
                    if (res.status === 201) {
                        Cookies.set("access_token", res.data.accessToken, { expires: 30, secure: true });
                        Cookies.set("refresh_token", res.data.refreshToken, { expires: 30, secure: true });
                        Cookies.set("user", JSON.stringify(res.data), { expires: 30, secure: true });

                        axiosAuth.defaults.headers.common["Authorization"] =
                            "Bearer " + res.data.access_token;

                        return axiosAuth(originalRequest);
                    }
                })
                .catch(_ => {
                    Logout();
                });
        }
    }
);