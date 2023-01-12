import { axiosInstance } from "../../utils/AxiosInstance";


export const getAllMovies = async ()=>{

    const URL='/mba/api/v1/movies';

    try{
    const response= await axiosInstance.get(URL);
    return response; 
   }
    catch(error){
        return error.response;
    }
}

export const getMovie = async (id) => {

    const URL = `/mba/api/v1/movies/${id}`;

    try{
        const response = await axiosInstance.get(URL);
        return response;
    }
    catch(error){
        throw error;
    }
}

export const removeMovie = async (movie) => {

    const URL = `/mba/api/v1/movies/${movie._id}`;

    try{
        const response = await axiosInstance.delete(URL,{ headers:{"x-access-token":localStorage.getItem("accessToken")}});
        return response;
    }
    catch(error){
        throw error;
    }
}

