import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h2>Welcome to our Forex platform</h2>
        <p>Buy stocks easily with our user-friendly platform.</p>
        <Link to="/register">
          <button className="btn btn-success btn-lg">Register</button>
        </Link>
        <p>
          Already have an account with us?{" "}
          <Link to="/login">
      <span className="text-light fs-6"> click  <a className="text-decoration-none text-success">here</a> to login </span>   
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
