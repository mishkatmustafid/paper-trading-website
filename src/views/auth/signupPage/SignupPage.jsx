import React from "react";
import ButtonClick from "../../../components/buttonClick/ButtonClick";

const SignupPage = () => {
  return (
    <div className="container-fluid  vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        style={{ border: "none" }}
        className="card bg-transparent border-none p-4"
      >
        <h2 className="mb-3 text-center ">Register</h2>
        <form>
          <div className="form-group mb-2">
            <label className="my-1 fs-5 font-weight-bold">Email:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mb-3">
            <label className="my-1 fs-5 font-weight-bold">Username:</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group mb-3">
            <label className="my-1 fs-5 font-weight-bold">Password:</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group mb-3">
            <label className="my-1 fs-5 font-weight-bold">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="confirm password"
            />
          </div>

          <ButtonClick
            title="Register"
            type="submit"
            className="btn btn-primary btn-block"
          />
        </form>
        <p className="mt-4 text-center">
          Already a Member? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
