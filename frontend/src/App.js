import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
