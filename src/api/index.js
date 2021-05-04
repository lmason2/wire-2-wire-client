import axios from "axios";
// "https://wire-2-wire.herokuapp.com"
const API = axios.create({ baseURL:  "http://localhost:5000"});


API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(`profile`)).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const updateProfile = (userData) => API.post("/user/updateProfile", userData)
export const getUsers = () => API.get("/user/get-users");
export const deleteUser = (id) => API.delete(`/user/delete-user/${id}`);

export const getTraining = () => API.get("/training");
export const saveTraining = (id, training) => API.post('/training/save', {id, training});
export const deleteTraining = (id) => API.delete('/training/delete');