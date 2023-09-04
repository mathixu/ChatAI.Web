import Cookies from "js-cookie";

const Logout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("user");
}

export default Logout;