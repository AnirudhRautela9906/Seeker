import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
function App() {
  
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
