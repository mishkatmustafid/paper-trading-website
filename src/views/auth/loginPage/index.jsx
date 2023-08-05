import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import SpinnerLoader from "../../../components/spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/auth/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();
  const callback = () => {
    navigate("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, callback }));
  };
  return (
    <div className="vw-100 row bg-white container-fluid">
      <div className="col-md-6 image"></div>

      <div className="shadow col-md-6 bg-white">
        <div className="vh-100    d-flex align-items-center justify-content-center bg-white">
          <div style={{ border: "none", width: "350px" }}>
            <h2 className="mb-5 text-center text-dark">Log IN</h2>
            <form onSubmit={handleSubmit}>
              {error && <span className="text-danger">{error}</span>}
              <div className="form-group mb-3">
                <label className="my-1 fs-5 text-dark font-weight-bold">
                  Email:
                </label>
                <input
                  style={{ height: "50px" }}
                  type="email"
                  className="form-control form-control-lg custom-input "
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <label className="my-1 text-dark fs-5 font-weight-bold">
                  Password:
                </label>
                <input
                  style={{ height: "50px" }}
                  type="password"
                  className="form-control form-control-lg custom-input "
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button
                  title={loading ? <SpinnerLoader /> : "Sign In"}
                  type="submit"
                  style={{ height: "50px" }}
                  className="btn btn-success btn-lg btn-block text-color-dark"
                >
                  {loading ? <SpinnerLoader /> : "Sign In"}{" "}
                </button>
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
