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
