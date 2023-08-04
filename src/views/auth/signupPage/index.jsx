import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";
import SpinnerLoader from "../../../components/spinner";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)

  }
  return (
    <div className="row bg-white container-fluid">
      <div className="col-md-6 image mx-auto"></div>
      <div className="container col-md-6 bg-white shadow-lg">
        <div className=" vh-100 d-flex align-items-center justify-content-center bg-white">
          <div>
            <h2 className="mb-5 text-center text-dark ">RegIster</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="my-1 fs-5  text-dark font-weight-bold">
                  Email:
                </label>
                <input
                    style={{height: "50px"}}
                  type="email"
                  className="form-control form-control-lg custom-input"
                  placeholder="enter your email"
                />
              </div>
              <div className="form-group mb-3">
                <label className="my-1 text-dark fs-5 font-weight-bold">
                  Username:
                </label>
                <input
                    style={{height: "50px"}}
                  type="text"
                  className="form-control form-control-lg custom-input"
                  placeholder="enter your username"
                />
              </div>
              <div className="row">
                <div className="form-group mb-3 col-md-6">
                  <label className="my-1 text-dark fs-5 font-weight-bold">
                    Password:
                  </label>
                  <input
                    type="password"
                    style={{height: "50px"}}
                    className="form-control form-control-lg custom-input"
                    placeholder="enter your password"
                  />
                </div>
                <div className="form-group  mb-4 col-md-6">
                  <label className="my-1 text-dark fs-5 font-weight-bold">
                    Confirm Password:
                  </label>
                  <input
                      style={{height: "50px"}}
                    type="password"
                    className="form-control form-control-lg custom-input"
                    placeholder="confirm password"
                  />
                </div>
              </div>

              <div className="d-grid">
                <button
                    style={{height: "50px"}}
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                >{loading ? <SpinnerLoader /> : "Register"}</button>
              </div>
            </form>
            <p className="mt-4 text-dark text-monospace text-center ">
              Already a Member ?{"   "}
              <Link to="/login">
                <a className="text-success text-decoration-none p-1">Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
