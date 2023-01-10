import {useState,useEffect} from 'react';
import {Dropdown, DropdownButton, Form,Button} from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import {signIn, signUp} from '../../api/auth';
import React from "react";

const Auth =()=>{
 
    const [showSignUp,setShowSignup]=useState(false);

    const [userId,setUserId]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userName,setUserName]=useState("");
    const [userType,setUserType]=useState("CUSTOMER");
    const [message,setMessage]=useState("");
    const [errorMessage,setErrorMessage]=useState("");

    const navigate= useNavigate();

    const redirectURL=()=>{

        const userType=localStorage.getItem("userTypes");

        if(!userType){
            setErrorMessage("something went wrong!");
            return;
        }

        if(userType==="CUSTOMER"){
            navigate(-1);
        }
        else if(userType==="CLIENT"){
            navigate("/client");
        }
        else{
            navigate("/admin");
        }

    }

    useEffect(()=>{
        if(localStorage.getItem("accessToken")){
            //redirect URL 
            redirectURL();
        }
    },[]);


    const clearState=()=>{
        setUserId("");
        setEmail("");
        setPassword("");
        setUserName("");
        setUserType("CUSTOMER");
        setErrorMessage("");
        setMessage("");
    }


    const updateSignUpData=(e)=>{

        const id=e.target.id;

        if(id==="username"){
            setUserName(e.target.value);
        }
        else if(id==="userId"){
            setUserId(e.target.value);
        }
        else if(id==="email"){
            setEmail(e.target.value);
        }
        else if(id==="password"){
            setPassword(e.target.value);
        }

        setErrorMessage("");
        setMessage("");

    }


    const handleSelect=(e)=>{
        setUserType(e);
    }

    const toggleSignUp=()=>{
        clearState();
        setShowSignup(!showSignUp);
    }

    const validateData=(data)=>{

        if(data.userId.length<5 || data.userId.length>20){
            setErrorMessage("UserId should be 5 to 10 characters long");
            return false;
        }

        if(data.userId.includes(' ')){
            setErrorMessage("UserId should not contain spaces");
            return false;
        }

        if(data.password.length<6 || data.password.length>10){
            setErrorMessage("Password should be 6 to 10 characters long");
            return false;
        }

        if(data.password.includes(' ')){
            setErrorMessage("Password should not contain spaces");
            return false;
        }

        if(data.name){
        if(data.name.length<5 || data.name.length>10){
            setErrorMessage("UserName should be 5 to 10 characters long");
            return false;

        }
        if(data.name.includes(' ')){
            setErrorMessage("UserName should not contain spaces");
            return false;
        }
        }
        return true;
    }

    const signupFn=async (e)=>{
        e.preventDefault();

        const data={
            name:userName,
            userId,
            email,
            userType,
            password
        };

        if(!validateData(data)){
            return;
        }

        const response = await signUp(data);

       if(response.status===201){
           setMessage("Signed Up Successfully");
           clearState();
       }else{
           setErrorMessage(response.data.message);
       }
    

    }

    const loginFn= async (e)=>{
        e.preventDefault();

        const data={
            userId,
            password
        };

        if(!validateData(data)){
            return;
        }

        const result = await signIn(data);

        if(result.status===200){
            setMessage("Logged in successfullly");

            const {name,userId,userTypes,userStatus,accessToken}=result.data;

            localStorage.setItem("name",name);
            localStorage.setItem("userId",userId);
            localStorage.setItem("userTypes",userTypes);
            localStorage.setItem("userStatus",userStatus);
            localStorage.setItem("accessToken",accessToken);

            redirectURL();
        }

        setErrorMessage(result.data.message);
        
     
    }


    return <div id="loginPage">

        <div id="loginPage" className='bg-dark d-flex justify-content-center align-items-center vh-100 vw-100'>

         <div className="card m-5 p-5 bg-dark text-light shadow-lg d-flex align-item-center justify-content-center vh-100 backg">   

        <h3> {(showSignUp)?"Sign Up":"Login"} </h3>

        <form onSubmit={(showSignUp)?signupFn:loginFn}> 

            <div className="input-group">
                <input type="text" className='form-control m-1' id="userId" placeholder='User Id' value={userId} onChange={updateSignUpData} autoFocus required />
            </div>

             
            <div className="input-group">
                <input type="password" className='form-control m-1' id="password" placeholder='Password' value={password} onChange={updateSignUpData} autoFocus required />
            </div>

            {
                showSignUp && 
                <>
                <div className="input-group">
                <input type="text" className='form-control m-1' id="username" placeholder='UserName' value={userName} onChange={updateSignUpData} autoFocus required />
                </div>
                <div className="input-group">
                <input type="text" className='form-control m-1' id="email" placeholder='Email' value={email} onChange={updateSignUpData} autoFocus required />
                </div>

                <div className='row m-1'>
                    <div className="col">
                        <span className="mx-1 my-1"> User Type </span>
                    </div>

                    <div className='col'>

                        <DropdownButton
                        align="end"
                        title={userType}
                        id= "userType"
                        onSelect={handleSelect}
                        variant="light"
                        >
                            <Dropdown.Item eventKey="CUSTOMER" > CUSTOMER </Dropdown.Item>
                            <Dropdown.Item eventKey="CLIENT" > CLIENT </Dropdown.Item>
                        </DropdownButton>

                    </div>

                </div>
                </>
            }

            <div className='input-group'>
                <input type="submit" className='form-control btn btn-danger' value={showSignUp ? "Sing Up":"Log In"} />
            </div>
        
            <div className='text-center pe' onClick={toggleSignUp}> {showSignUp ?"Already have an Account? Login":"Dont have an Account? Signup"} </div> 

            <div className='auth-error-msg text-success text-center'>{message}</div>
            <div className='auth-error-msg text-danger text-center'>{errorMessage}</div>

        </form>

        </div>
        </div>
  </div>


}



export default Auth;