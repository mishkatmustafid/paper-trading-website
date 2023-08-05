import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import SpinnerLoader from "../../../components/spinner";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../redux/features/auth/authSlice";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [full_name, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passError, setPassError] = useState("")
  const navigate = useNavigate();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPass){
      setPassError("Passwords mismatch")
      return;
    } 
    dispatch(
      signupUser({
        full_name,
        email,
        password,
        successCallback: () => {
          console.log("Signup successful! Redirecting...");
          // Redirect or perform any other action upon successful signup
          navigate("/dashboard");
        },
      })
    );
  };
  return (
    <div className="row bg-white container-fluid">
      <div className="col-md-6 image mx-auto"></div>
      <div className="container col-md-6 bg-white shadow-lg">
        <div className=" vh-100 d-flex align-items-center justify-content-center bg-white">
          <div>
            <h2 className="mb-5 text-center text-dark ">RegIster</h2>
            <form onSubmit={handleSubmit}>
              {error && <span className="text-danger">{error.message}</span>}
              <div className="form-group mb-2">
                <label className="my-1 fs-5  text-dark font-weight-bold">
                  Email:
                </label>
                <input
                  style={{ height: "50px" }}
                  type="email"
                  className="form-control form-control-lg custom-input"
                  placeholder="enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label className="my-1 text-dark fs-5 font-weight-bold">
                  Legal Name:
                </label>
                <input
                  style={{ height: "50px" }}
                  type="text"
                  className="form-control form-control-lg custom-input"
                  placeholder="enter your full name"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="form-group mb-3 col-md-6">
                  <label className="my-1 text-dark fs-5 font-weight-bold">
                    Password:
                  </label>
                  <input
                    type="password"
                    style={{ height: "50px" }}
                    className="form-control form-control-lg custom-input"
                    placeholder="enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group  mb-4 col-md-6">
                  <label className="my-1 text-dark fs-5 font-weight-bold">
                    Confirm Password:
                  </label>
                  <input
                    style={{ height: "50px" }}
                    type="password"
                    className="form-control form-control-lg custom-input"
                    placeholder="confirm password"
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                </div>
              </div>
              {passError && <span className="text-danger">{passError}</span>}

              <div className="d-grid">
                <button
                  style={{ height: "50px" }}
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                >
                  {loading ? <SpinnerLoader /> : "Register"}
                </button>
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
