import { Link, useNavigate } from "react-router-dom";
import logo from "../../Home_images/logo.png";
import "./Style.scss";
import { getApi, postApi } from "../../services/ApiConfig";
const NavbarProfile = () => {
  const navigate = useNavigate();
  const logout = ()=>{
    postApi("http://localhost:8080/seeker/logout").then(()=>{
      alert("loggedout");
    }).catch(()=>{
      alert("Error")
    })
  }
  return (
    <>
      <div className="nav1">
        <div className="nav1-1">
          <img src={logo} alt="" />
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="profilePic" onClick={logout}>

        </div>
      </div>
    </>
  );
};

export default NavbarProfile;