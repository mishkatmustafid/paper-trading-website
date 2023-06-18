import React from "react";
import ButtonClick from "../buttonClick/ButtonClick";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav

      className="container-fluid navbar px-3 navbar-expand-lg bg-light fixed-top shadow px-2"
    >
      <Link to={"/dashboard"}>
        <img
          src={require("../../assets/trade_logo.png")}
          alt=""
          className="mx-2"
          style={{ height: "50px" }}
        />
        <a className="navbar-brand fs-6" href="#home">
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
            <Link to={"/leaderboard"} className="nav-link fs-6">
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/portfolio"} className="nav-link fs-6">Portfolio</Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">Emmanuel Tweneboah</li>
      </ul>
    </nav>
  );
};

export default Navbar;
