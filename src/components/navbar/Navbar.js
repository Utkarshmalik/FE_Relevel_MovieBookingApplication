import {Button,FloatingLabel,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {signOut} from '../../api/auth';
import React, { Component } from 'react';

const onLogout=()=>{
    signOut();
    window.location.href="/";
}

const Navbar = ()=>{
    return(<>
    <div className='container-fluid bg-dark sticky-top' >

        <div className="row text-center">

            <div className="col-lg-2 col-sm-12">

                <Link to="/" className='text-decoration-none'>
                <div className="display-5 text-danger py-1"> MBA </div>
                </Link>

            </div>

            <div className='col-lg-8 col-sm-8 py-2'>
                    <FloatingLabel
                controlId="floatingInput"
                label="Search a Movie"
                className="mb-2 w-50 text-center"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            </div>

            <div className='col-lg-2 col-sm-4 p-2'>

              {

                  localStorage.getItem("accessToken") ? 
                  <Button variant='danger' onClick={()=>onLogout()} >Logout</Button>:
                  <Button variant='danger' onClick={()=>{window.location.href="/login"}} >Login/Signup</Button>
              }
     
            </div>


        </div>

    </div>

    </>);
}

export default Navbar;