import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/signup/SignUpForm.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState(null); // Default to null before API response

  useEffect(() => {
    axios
      .get("http://localhost:8080/seeker/me", {
        withCredentials: true, // Include credentials (cookies) in the request
      })
      .then((res) => {
        console.log("Result of ME: " + JSON.stringify(res.data));
        setUrl("/profile"); // Set URL to profile if API request succeeds
      })
      .catch((error) => {
        console.log("Error:" + error);
         // Redirect to login on error
      });
  }, []);

  if (url === null) {
    return (
      <Router>
        {url && <Navigate to={url} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Toaster />
      </Router>
    );
  }

  return (
    <Router>
      {url && <Navigate to={url} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
