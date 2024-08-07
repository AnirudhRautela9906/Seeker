import React from 'react'
import Footer from '../../components/footerLogin/Footer'
import NavbarLogin from '../../components/navbar/NavbarLogin'
import User from './../../Home_images/Username.svg'
import './style.scss'
import Lock from './../../Home_images/Password.svg'
const Login = () => {
  return (
    <>
      <NavbarLogin/> 
      <p className='p1'>Log in to Seeker</p>      
      <div className='loginBox'>
        <div className='inputContainer'>
          <div>Email</div>
          <div className='inputWrapper'>
            <img src={User} alt="Username icon" style={{height:"30px"}} />
            <input type="text" name="email" />
          </div>
        </div>
        <div className='inputContainer'>
          <div>Password</div>
          <div className='inputWrapper'>
            <img src={Lock} alt="Username icon" style={{height:"30px"}} />
            <input type="password" name="password" />
          </div>
        </div>
        <div className="loginButtonBox">
          <button>Login</button>
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
