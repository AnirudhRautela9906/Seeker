import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/signup/SignUpForm.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import About from "./pages/About/About.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { setUser } from "./redux/userSlice.js";
import { useDispatch , useSelector} from "react-redux";
import axios from "axios";
import { getApi } from "./services/ApiConfig.js";
import { useFetchGet } from "./hooks/useFetchGet.jsx";

function App() {
  //const [url, setUrl] = useState(null); // Default to null before API response
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const {data,loading,error} = useFetchGet("http://localhost:8080/seeker/me");
  useEffect(() => {
    
    if(!loading )
      {
        if(error === null)
        {
          dispatch(setUser(data));
          // toast.success(`Welcome ${data.name}`);
          //setUrl("/profile")
        }
        
      }
  }, [data]);
  
  // console.log("hi");
  const x  = "/profile"
  return (
    <>
    <Router>
      {/* {console.log(user.email)} */}
      {/* { user.email !== "" &&  <Navigate to={x}  />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Toaster />
    </Router>
    </>
  );
}

export default App;
