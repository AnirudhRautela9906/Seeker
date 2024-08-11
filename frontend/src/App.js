import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Register from "./pages/signup/SignUpForm.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from './pages/profile/Profile.jsx'
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  useEffect(()=>{
    axios.get("http://localhost:8080/seeker/me", {
      withCredentials: true,  // Include credentials (cookies) in the request
    }).then().catch()
  },[]);
  
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/Signup" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Toaster/>
      </Router>
    </div>
  );
}

export default App;
