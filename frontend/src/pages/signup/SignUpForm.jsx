// import React, { useState, useEffect } from "react";
// import "./SignUpForm.scss";
// import bgImage from "../../Home_images/SignUp_page_background.png";
// // import Logo from "../../components/navbar/NavbarLogin";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { postApi } from "../../services/ApiConfig";
// import { useDispatch, useSelector } from "react-redux";
// import {register} from "../..//redux/actions/userActions"
// import { LOGIN_REQUEST } from "../../redux/constants/userConstants";
// const SignUpForm = () => {
//   const dispatch = useDispatch();
//   const nav = useNavigate();
//   const [obj, setObj] = useState({
//     email: "",
//     name: "",
//     password: "",
//     aadhar: "",
//     age: 0,
//     address: {
//       state: "",
//       city: "",
//       area: "",
//     },
//     phoneNumber: "",
//   });

//   const {error,loading,isAuthenticated,Name,isloggedOut} = useSelector((state) => state.user)

//   const onRegister = (event) => {
//     event.preventDefault();

//       dispatch(register(obj))
//   };

//   const handleChange = (field, value) => {
//     setObj((prev) => ({
//       ...prev,
//       ...(field === "state" || field === "city" || field === "area"
//         ? { address: { ...prev.address, [field]: value } }
//         : { [field]: value }),
//     }));
//   };
//   useEffect(()=>{
//     // console.log(body,loading);
//     if(!loading )
//       {
//         if(error){
//           toast.error("Invalid Email or Password");

//         }
//         else if(isAuthenticated)
//         {

//           // setTimeout(() => {
//             nav('/profile')
//         // }, 500);
//         }

//       }

//   },[loading, error, isAuthenticated, Name, nav, dispatch])
//   return (
//     <>
//       {/* <div className="nav">
//         <Logo />
//         <button
//           onClick={() => {
//             nav("/Login");
//           }}
//         >
//           Log in
//         </button>
//       </div>
//        */}

//       <div className="container">
//         <div className="form-container">
//           <form onSubmit={onRegister}>
//             <div className="form-group">
//               <label htmlFor="first-name">Full Name</label>
//               <input
//                 type="text"
//                 id="first-name"
//                 name="first-name"
//                 required
//                 onChange={(event) => handleChange("name", event.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 required
//                 onChange={(event) => handleChange("city", event.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="state">State</label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 required
//                 onChange={(event) => handleChange("state", event.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="pincode">Pincode</label>
//               <input
//                 type="text"
//                 id="pincode"
//                 name="pincode"
//                 required
//                 onChange={(event) => handleChange("area", event.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="mobile-number">Mobile Number</label>
//               <input
//                 type="text"
//                 id="mobile-number"
//                 name="mobile-number"
//                 required
//                 onChange={(event) =>
//                   handleChange("phoneNumber", event.target.value)
//                 }
//               />
//               <button type="button" className="otp-button">
//                 Get OTP
//               </button>
//               <button type="button" className="otp-button">
//                 Resend OTP
//               </button>
//               <input
//                 placeholder="enter otp"
//                 type="text"
//                 className="otp"
//                 name="otp"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 onChange={(event) => handleChange("email", event.target.value)}
//               />
//               <button type="button" className="otp-button">
//                 Get OTP
//               </button>
//               <button type="button" className="otp-button">
//                 Resend OTP
//               </button>
//               <input
//                 placeholder="enter otp"
//                 type="text"
//                 className="otp"
//                 name="otp"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 required
//                 onChange={(event) =>
//                   handleChange("password", event.target.value)
//                 }
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="aadhar-number">Aadhar Number</label>
//               <input
//                 type="text"
//                 id="aadhar-number"
//                 name="aadhar-number"
//                 required
//                 onChange={(event) => handleChange("aadhar", event.target.value)}
//               />
//             </div>
//             <div className="form-group1">
//               <input type="checkbox" id="terms" name="terms" required />
//               <label htmlFor="terms">
//                 Yes, I understand and agree to the Seeker Terms of Service,
//                 including the User Agreement and Privacy Policy.
//               </label>
//             </div>
//             <button type="submit" className="submit-button">
//               Create my account
//             </button>
//             <p>
//               Already have an account? <a href="/Login">Log in</a>
//             </p>
//           </form>
//         </div>
//         <div id="background-image">
//           <img src={bgImage} alt="background" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUpForm;

import React, { useEffect, useState } from "react";
import "./SignUpForm.scss";
import bgImage from "../../Home_images/SignUp_page_background.png";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postApi } from "../../services/ApiConfig";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../..//redux/actions/userActions";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [obj, setObj] = useState({
    email: "",
    name: "",
    password: "",
    aadhar: "",
    age: 0,
    phoneNumber: "",
    address: {
      state: "",
      city: "",
      area: "",
    },
  });
  const { error, loading, isAuthenticated, Name, isloggedOut } = useSelector(
    (state) => state.user
  );
  const [errors, setErrors] = useState({});

  // if (user.email !== "") {
  //   nav("/profile");
  // }

  const handleChange = (field, value) => {
    setObj((prev) => ({
      ...prev,
      ...(field === "state" || field === "city" || field === "area"
        ? { address: { ...prev.address, [field]: value } }
        : { [field]: value }),
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (obj.name.trim().length === 0) {
      errors.name = "Name is required";
    }
    if (!obj.age) {
      errors.age = "Age is required";
    } else if (isNaN(obj.age) || obj.age <= 0) {
      errors.age = "Age should be positive number";
    }
    if (!obj.address.area.trim()) {
      errors.area = "Area is required";
    }
    if (!obj.address.city.trim()) {
      errors.city = "City is required";
    }
    if (!obj.address.state.trim()) {
      errors.state = "State is required";
    }
    if (!obj.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(obj.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!obj.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(obj.email)) {
      errors.email = "Invalid email";
    }
    if (!obj.password.trim()) {
      errors.password = "Password is required";
    } else if (obj.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (!obj.aadhar.trim()) {
      errors.aadhar = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(obj.aadhar)) {
      errors.aadhar = "Invalid aadhar number";
    }
    // if (!obj.terms) {
    //   errors.terms = "You must agree to the terms";
    // }
    return errors;
  };
  const onRegister = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // postApi("http://localhost:8080/seeker/register", obj)
      //   .then((res) => {
      //     toast.success(`Welcome ${res.data.name} !`);
      //     dispatch(setUser(res.data));
      //     nav("/profile");
      //   })
      //   .catch((error) => {
      //     toast.error("Already Signed Up ");
      //   });
      dispatch(register(obj));
    }
  };
  useEffect(() => {
    // console.log(body,loading);
    if (!loading) {
      if (error) {
        toast.error("Already Signed Up ");
      } else if (isAuthenticated) {
        // setTimeout(() => {
        nav("/profile");
        // }, 500);
      }
    }
  }, [loading, error, isAuthenticated, Name, nav, dispatch]);

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form onSubmit={onRegister}>
            <div className="form-group">
              <label htmlFor="first-name">Full Name *</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                value={obj.name}
                onChange={(event) => handleChange("name", event.target.value)}
              />
              {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="text"
                id="age"
                name="age"
                value={obj.age}
                onChange={(event) => handleChange("age", event.target.value)}
              />
              {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="area">Area *</label>
              <input
                type="text"
                id="area"
                name="area"
                value={obj.address.area}
                onChange={(event) => handleChange("area", event.target.value)}
              />
              {errors.area && <div style={{ color: "red" }}>{errors.area}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={obj.address.city}
                onChange={(event) => handleChange("city", event.target.value)}
              />
              {errors.city && <div style={{ color: "red" }}>{errors.city}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="state">State *</label>
              <input
                type="text"
                id="state"
                name="state"
                value={obj.address.state}
                onChange={(event) => handleChange("state", event.target.value)}
              />
              {errors.state && (
                <div style={{ color: "red" }}>{errors.state}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="mobile-number">Mobile Number *</label>
              <input
                type="text"
                id="mobile-number"
                name="mobile-number"
                value={obj.phoneNumber}
                onChange={(event) =>
                  handleChange("phoneNumber", event.target.value)
                }
              />
              {errors.phoneNumber && (
                <div style={{ color: "red" }}>{errors.phoneNumber}</div>
              )}
              {/* <button type="button" className="otp-button">
                Get OTP
              </button>
              <button type="button" className="otp-button">
                Resend OTP
              </button>
              <input
                placeholder="enter otp"
                type="text"
                className="otp"
                name="otp"
              /> */}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={obj.email}
                onChange={(event) => handleChange("email", event.target.value)}
              />
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
              {/* <button type="button" className="otp-button">
                Get OTP
              </button>
              <button type="button" className="otp-button">
                Resend OTP
              </button>
              <input
                placeholder="enter otp"
                type="text"
                className="otp"
                name="otp"
              /> */}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={obj.password}
                onChange={(event) =>
                  handleChange("password", event.target.value)
                }
              />
              {errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="aadhar-number">Aadhar Number *</label>
              <input
                type="text"
                id="aadhar-number"
                name="aadhar-number"
                value={obj.aadhar}
                onChange={(event) => handleChange("aadhar", event.target.value)}
              />
              {errors.aadhar && (
                <div style={{ color: "red", marginBottom: 10 }}>
                  {errors.aadhar}
                </div>
              )}
            </div>
            <div className="form-group1">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                Yes, I understand and agree to the Seeker Terms of Service,
                including the User Agreement and Privacy Policy. *
              </label>
            </div>
            <button type="submit" className="submit-button">
              Create my account
            </button>
            <p>
              Already have an account? <a href="/Login">Log in</a>
            </p>
          </form>
        </div>
        <div id="background-image">
          <img src={bgImage} alt="background" />
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
