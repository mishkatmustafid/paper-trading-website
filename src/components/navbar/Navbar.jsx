import React from "react";
import ButtonClick from "../buttonClick/ButtonClick";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar p-3 navbar-expand-lg navbar-dark">
      <div className="navbar-brand">
        <img
          src={require("../../assets/trade_logo.png")}
          alt=""
          className="mx-2"
          style={{ height: "50px" }}
        />
        Paper Trading
      </div>
      <div className="navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <Link to="/login">
            <li className="nav-item">
              <ButtonClick className="btn btn-success mx-2" title="Login" />
            </li>
          </Link>
          <Link to="/register">
            <li className="nav-item">
              <ButtonClick className="btn btn-danger" title="Register" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
