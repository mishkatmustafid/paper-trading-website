import React from "react";
import ButtonClick from "../../../components/buttonClick/ButtonClick";
import { Link } from "react-router-dom";
import "./SignupPage.css"

const SignupPage = () => {
  return (
    <div className="container-fluid  vh-100 d-flex align-items-center justify-content-center custom-background">
      <div
        style={{ border: "none" }}
        className="card bg-transparent border-none p-4"
      >
        <h2 className="mb-3 text-center text-white ">Register</h2>
        <form>
          <div className="form-group mb-2">
            <label className="my-1 fs-5 text-light font-weight-bold">
              Email:
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mb-3">
            <label className="my-1 text-light fs-5 font-weight-bold">
              Username:
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group mb-3">
            <label className="my-1 text-light fs-5 font-weight-bold">
              Password:
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group  mb-4">
            <label className="my-1 text-light fs-5 font-weight-bold">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="confirm password"
            />
          </div>
          <div className="d-grid">
            <ButtonClick
              title="Register"
              type="submit"
              className="btn btn-success btn-lg btn-block"
            />
          </div>
        </form>
        <p className="mt-4 text-light text-monospace text-center ">
          Already a Member ?{"   "}
          <Link to="/login">
            <a className="text-success text-decoration-none p-1">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
