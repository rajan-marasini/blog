import axios from "axios";

export const createBlog = async (title: string, description: string) => {
    const { data } = await axios.post("/api/v1/blog/create", {
        title,
        description,
    });
    return data;
};

export const get_all_blogs = async () => {
    const { data } = await axios.get("/api/v1/blog/all-blogs");
    return data;
};

export const delete_a_blog = async (id: string) => {
    const { data } = await axios.delete(`/api/v1/blog/${id}`);
    return data;
};

export const update_a_blog = async (
    id: string,
    title: string,
    description: string
) => {
    const { data } = await axios.put(`/api/v1/blog/${id}`, {
        title,
        description,
    });
    return data;
};

export const get_a_blog = async (id: string) => {
    const { data } = await axios.get(`/api/v1/blog/${id}`);
    return data;
};

export const get_my_blogs = async () => {
    const { data } = await axios.get("/api/v1/blog/all-my-blogs");
    return data;
};
