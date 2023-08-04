import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5500" });

export const getUser = (userId) => API.get(`/user/${userId}`);

