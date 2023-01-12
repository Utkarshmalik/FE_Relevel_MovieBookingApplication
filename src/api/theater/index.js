import { axiosInstance } from "../../utils/AxiosInstance";


export const getAllTheaters = async () =>{
    const URL = "/mba/api/v1/theatres";

    try{
        const response = await axiosInstance.get(URL);
        return response;
    }
    catch(err){
        return err;
    }
}

export const getTheaterById = async (id)=>{

    const URL = `/mba/api/v1/theatres/${id}`;
    try{
        const response = await axiosInstance.get(URL,{headers:{"x-access-token":localStorage.getItem("accessToken")}});
        return response;
    }
    catch(err){
        return err;
    }
}