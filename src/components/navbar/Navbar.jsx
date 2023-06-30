import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <nav className="container-fluid navbar px-3 navbar-expand-lg bg-light fixed-top shadow px-2">
      <Link to={"/dashboard"}>
        <img
          src={require("../../assets/trade_logo.png")}
          alt=""
          className="mx-2"
          style={{ height: "50px" }}
        />
        <a className="navbar-brand fs-6 text-decoration-none">
          Paper Trading
        </a>
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
        <li className="nav-item px-3">Emmanuel Tweneboah</li>
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
