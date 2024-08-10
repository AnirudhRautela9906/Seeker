import React from 'react'
import Footer from '../../components/footerLogin/Footer'
import NavbarLogin from '../../components/navbar/NavbarLogin'
import User from './../../Home_images/Username.svg'
import axios from 'axios';
import toast from 'react-hot-toast';
import './style.scss'
import Lock from './../../Home_images/Password.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [Password, setPassword] = useState("");
  const onLogin = ()=>{
    axios.post("http://localhost:8080/seeker/user/login",{
      "email" : email,
      "password" : Password
  }, {
    withCredentials: true,  // Include credentials (cookies) in the request
  }).then((res)=>{
    toast.success("Login Successful");
    navigate('/profile');
  }).catch((error)=>{
    console.log("sjk");
    toast.error("Invalid Email or Password");
  })
  }
  return (
    <>
      <NavbarLogin/> 
      <p className='p1'>Log in to Seeker</p>      
      <div className='loginBox'>
        <div className='inputContainer'>
          <div>Email</div>
          <div className='inputWrapper'>
            <img src={User} alt="Username icon" style={{height:"30px"}} />
            <input type="text" name="email"  onChange={(event)=>{setEmail(event.target.value)}}/>
          </div>
        </div>
        <div className='inputContainer'>
          <div>Password</div>
          <div className='inputWrapper'>
            <img src={Lock} alt="Username icon" style={{height:"30px"}} />
            <input type="password" name="password" onChange={(event)=>{setPassword(event.target.value)}}/>
          </div>
        </div>
        <div className="loginButtonBox">
          <button onClick={onLogin}>Login</button>
          <div>Forgot Password?</div>
        </div>
        <div className="SignupButtonBox">
          <p>Don't have a Seeker Account?</p>
          <button>Sign Up</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login
