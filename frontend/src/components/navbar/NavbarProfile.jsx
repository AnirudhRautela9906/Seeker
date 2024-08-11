import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Home_images/logo.png";
import "./Style.scss";
const NavbarProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav1">
        <div className="nav1-1">
          <img src={logo} alt="" onClick={()=>{navigate("/")}} />
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="profilePic">

        </div>
      </div>
    </>
  );
};

export default NavbarProfile;