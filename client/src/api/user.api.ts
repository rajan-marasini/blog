import axios from "axios";

export const register = async (
    name: string,
    email: string,
    password: string
) => {
    const { data } = await axios.post("/api/v1/user/register", {
        name,
        email,
        password,
    });
    return data;
};

export const login = async (email: string, password: string) => {
    const { data } = await axios.post("/api/v1/user/login", {
        email,
        password,
    });
    return data;
};

export const profile = async () => {
    const { data } = await axios.get("/api/v1/user/me");
    return data.user;
};

export const logout = async () => {
    const { data } = await axios.post("/api/v1/user/logout");
    return data;
};
