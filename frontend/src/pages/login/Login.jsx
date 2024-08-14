import React, { useEffect } from 'react'
import Footer from '../../components/footerLogin/Footer'
import NavbarLogin from '../../components/navbar/NavbarLogin'
import User from './../../Home_images/Username.svg'
import toast from 'react-hot-toast';
import './Login.scss'
import Lock from './../../Home_images/Password.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../redux/userSlice';

import { postApi } from '../../services/ApiConfig.js';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [body, setBody] = useState({
    "email" : email,
    "password" : password
  });
  const nav = useNavigate();
  const {user} = useSelector(state=> state.user);
  
  const onLogin = ()=>{
  
  
  postApi("http://localhost:8080/seeker/login",{email,password}).then((res)=>{
    dispatch(setUser(res.data));
    setLoading(false);
    toast.success(`Welome ${res.data.name}`);
  }).catch((error)=>{
    toast.error("Invalid Email or Password");
    setLoading(false);
  });
    
  }
  // const {loading, error, data} = useFetchPost(,isLogin);
  useEffect(()=>{
     
  },[])

  useEffect(()=>{
    if(user.email !== ""){
      nav("/profile");
    }
  },[user,nav])
  return (
    <>
      <NavbarLogin/> 
      <p className='p1'>Log in to Seeker</p>      
      <div className='loginBox'>
        <div className='inputContainer'>
          <div>Email</div>
          <div className='inputWrapper'>
            <img src={User} alt="Username icon" style={{height:"30px"}} />
            <input type="text" name="email"  onChange={(event)=>{setEmail(event.target.value)}} required/>
          </div>
        </div>
        <div className='inputContainer'>
          <div>password</div>
          <div className='inputWrapper'>
            <img src={Lock} alt="Username icon" style={{height:"30px"}} />
            <input type="password" name="password" onChange={(event)=>{setpassword(event.target.value)}} required/>
          </div>
        </div>
        <div className="loginButtonBox">
          <button onClick={onLogin}>Login</button>
          <div>Forgot password?</div>
        </div>
        <div className="SignupButtonBox">
          <p>Don't have a Seeker Account?</p>
          <button onClick={()=>{navigate("/Signup")}}>Sign Up</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login
