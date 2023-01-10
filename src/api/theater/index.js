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