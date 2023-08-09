import React, { useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="landing-page">
      <div className="content">
        <h2>Welcome to our Forex platform</h2>
        <p>Buy stocks easily with our user-friendly platform.</p>
        <Link to="/register">
          <button className="btn btn-success btn-lg">Register</button>
        </Link>
        <span>
          Already have an account with us?{" "}
          <span className="text-decoration-none text-light fs-6">
            click{" "}
            <Link className="text-decoration-none text-success" to="/login">
              here{" "}
            </Link>
            to login
          </span>
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
