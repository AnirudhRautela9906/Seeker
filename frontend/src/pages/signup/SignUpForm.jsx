import React from 'react';
import './SignUpForm.scss';
import bgImage from "../../Home_images/SignUp_page_background.png"
import Logo from "../../components/navbar/NavbarLogin"

const SignUpForm = () => {
  return (
    <>
        <div className='nav'>
          <Logo/>
          <button>Log in</button>
        </div>
        
    <div className="container">
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="first-name">First name</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" required />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input type="text" id="pincode" name="pincode" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input type="text" id="mobile-number" name="mobile-number" required />
            <button type="button" className="otp-button">Get OTP</button>
            <button type="button" className="otp-button">Resend OTP</button>
            <input placeholder='enter otp' type="text" className="otp" name="otp" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <button type="button" className="otp-button">Get OTP</button>
            <button type="button" className="otp-button">Resend OTP</button>  
            <input placeholder='enter otp' type="text" className="otp" name="otp" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="aadhar-number">Aadhar Number</label>
            <input type="text" id="aadhar-number" name="aadhar-number" required />
          </div>
          <div className="form-group1">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">Yes, I understand and agree to the Seeker Terms of Service, including the User Agreement and Privacy Policy.</label>
          </div>
          <button type="submit" className="submit-button">Create my account</button>
          <p>Already have an account? <a href="#">Log in</a></p>
        </form>
      </div>
      <div id="background-image">
          <img src={bgImage} alt="background-image" />
        </div>
    </div>
    </>
  );
};

export default SignUpForm;
