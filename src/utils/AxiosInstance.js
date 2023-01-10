import axios from 'axios';
import {TIMEOUT, API_BASE_URL} from "../config/Config";

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';


export const axiosInstance=axios.create({
    baseURL:API_BASE_URL,
    timeout:TIMEOUT
})

// axiosInstance.interceptors.request.use(
//     async config => {
//         const accessToken  = localStorage.getItem("accessToken");
//         if(accessToken){
//         config.headers.common['x-access-token']= accessToken;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     }
// )