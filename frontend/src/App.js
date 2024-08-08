import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Register from "./pages/signup/SignUpForm.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from './pages/profile/Profile.jsx'
function App() {
  
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/Signup" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
