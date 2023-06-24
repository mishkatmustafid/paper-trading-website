import React from "react";
import ButtonClick from "../../../components/buttonClick/ButtonClick";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard");
  };
  return (
    <div className="row bg-white container-fluid">
      <div className="col-md-6 image"></div>
      <div className=" container col-md-6 bg-white">
        <div className="vh-100 shadow  d-flex align-items-center justify-content-center bg-white">
          <div style={{ border: "none", width: "350px" }}>
            <h2 className="mb-5 text-center text-dark">Log IN</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="my-1 fs-5 text-dark font-weight-bold">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg custom-input"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-4">
                <label className="my-1 text-dark fs-5 font-weight-bold">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg custom-input"
                  placeholder="Enter your password"
                />
              </div>
              <div className="d-grid">
                <ButtonClick
                  title="Sign In"
                  type="submit"
                  className="btn btn-success btn-lg btn-block text-color-dark"
                />
              </div>
            </form>
            <p className="mt-4 text-center text-monospace text-dark">
              New to paper trading?{" "}
              <Link to="/register">
                <a className="text-success text-decoration-none ">Register</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
