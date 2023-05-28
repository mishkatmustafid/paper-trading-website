import React from "react";
import ButtonClick from "../../../components/buttonClick/ButtonClick";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css"

const LoginPage = () => {
  let navigate = useNavigate();
  const handleSubmit = () =>{
      navigate("/dashboard")

  }
  return (
    <div className="container-fluid  vh-100 d-flex align-items-center justify-content-center custom-background">
      <div
        style={{ border: "none" }}
        className="card bg-transparent border-none p-5"
      >
        <h2 className="mb-5 text-center text-light">Log IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="my-1 fs-5 text-light font-weight-bold">Email:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mb-4">
            <label className="my-1 text-light fs-5 font-weight-bold">Password:</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="d-grid">

          <ButtonClick
            title="Sign In"
            type="submit"
            className="btn btn-success btn-lg btn-block text-color-light"
          />
          </div>
        </form>
        <p className="mt-4 text-center text-monospace text-light">
          New to paper trading?{" "}
          <Link to="/register">
            <a className="text-success text-decoration-none ">Register</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
