import { axiosInstance } from "../../utils/AxiosInstance";


export const signIn = async (user)=>{

    const URL='/mba/api/v1/auth/signIn';

    try{
    const response= await axiosInstance.post(URL,user);
    
    if(response.data && response.data.accessToken){

        const {name,userId,email,userTypes,userStatus,accessToken}=response.data;

        localStorage.setItem("name",name);
        localStorage.setItem("userId",userId);
        localStorage.setItem("email",email);
        localStorage.setItem("userTypes",userTypes);
        localStorage.setItem("userStatus",userStatus);
        localStorage.setItem("accessToken",accessToken);
    }

    return response; 
   }
    catch(error){
        console.log(error);
        return error.response;
    }
} 


export const signUp= async (user)=>{

    const URL = "/mba/api/v1/auth/signup";

    try{
        const response=await axiosInstance.post(URL,user);
        return response;
    }
    catch(error){
        return error.response;
    }
}

export const signOut= ()=>{

    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("userTypes");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userStatus");


}