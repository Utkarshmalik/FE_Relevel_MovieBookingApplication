import { axiosInstance } from "../../utils/AxiosInstance";


export const getAllUsers= async () => {

    const URL = '/mba/api/v1/users/';
    try{
    const response = await axiosInstance.get(URL,{ headers:{"x-access-token":localStorage.getItem("accessToken")}});
    return response;
    }
    catch(err){
        return err;
    }   
}