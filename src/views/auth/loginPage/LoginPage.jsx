import React from "react";
import ButtonClick from "../../../components/buttonClick/ButtonClick";

const LoginPage = () => {
  return (
    <div className="container-fluid  vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        style={{ border: "none" }}
        className="card bg-transparent border-none p-5"
      >
        <h2 className="mb-5 text-center ">Log IN</h2>
        <form>
          <div className="form-group mb-3">
            <label className="my-1 fs-5 font-weight-bold">Email:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mb-4">
            <label className="my-1 fs-5 font-weight-bold">Password:</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter your password"
            />
          </div>
          <ButtonClick title="Sign In" type="submit" className="btn btn-primary btn-block"/>
        </form>
        <p className="mt-4 text-center">
          New to paper trading? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
