import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
const Navbar = ({full_name}) => {

  const dispatch = useDispatch();
  const navigate =useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="container-fluid navbar  px-3 navbar-expand-lg bg-light fixed-top shadow px-2">
      <Link style={{fontFamily : "inherit", fontWeight: "bolder", color: "#e39246"}} className="navbar-brand  text-decoration-none " to={"/dashboard"}>
        <img
          src={require("../../assets/trade_logo.png")}
          alt=""
          className="mx-2"
          style={{ height: "50px" }}
        />
          Paper Trading
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/dashboard"} className="nav-link fs-6">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/marketoverview"} className="nav-link fs-6">
              Market Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/transactions"} className="nav-link fs-6">
              Transactions
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/leaderboard"} className="nav-link fs-6">
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/portfolio"} className="nav-link fs-6">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className='nav-item px-3'>{full_name}</li>
        <FontAwesomeIcon
          onClick={handleLogout}
          icon={faSignOutAlt}
          style={{ color: "#e39246", height: "25px", width: "25px" }}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
