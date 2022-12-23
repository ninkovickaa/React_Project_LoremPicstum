import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://picsum.photos/",
});

export const AxiosAll = axios.all;
