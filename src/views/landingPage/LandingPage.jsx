import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    // <div className="container-fluid custom-background vh-100 text-white d-flex flex-column">
    //   <Navbar />
    //   <div className="row flex-grow-1">
    //     <div className="col-md-6 rounded-5 d-flex align-items-center">
    //       <img
    //         src={require("../../assets/trading.jpg")}
    //         alt="Trading"
    //         className="img-fluid rounded-5 p-1"
    //       />
    //     </div>
    //     <div className="col-md-6 d-flex align-items-center">
    //       <div className="p-5">
    //         <h1 className="text-start">Welcome to our Trading Platform</h1>
    //         <p className="text-start">
    //           We are thrilled to have you here, ready to embark on your stock
    //           trading journey. Our platform provides you with the opportunity to
    //           buy and sell stocks with ease, all in a risk-free environment.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
