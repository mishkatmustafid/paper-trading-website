import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { fetchUser } from "../../redux/features/user/userSlice";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "none",
    boxShadow: "0px 4px 6px rgba(227, 146, 70, 0.1)",
    padding: "20px",
    maxWidth: "400px",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(4px)",
  },
};

Modal.setAppElement("#root"); // Set the app element for screen readers

const Navbar = () => {
  const user_id = useSelector((state) => state.auth.user_id);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const openLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchUser(user_id));
  }, [user_id, dispatch]);

  return (
    <nav className="container-fluid navbar px-3 navbar-expand-lg bg-light fixed-top shadow px-2">
      <NavLink
        style={{
          fontFamily: "inherit",
          fontWeight: "bolder",
          color: "#e39246",
        }}
        className="navbar-brand text-decoration-none"
        to={"/dashboard"}
      >
        <img
          src={require("../../assets/trade_logo.png")}
          alt=""
          className="mx-2"
          style={{ height: "50px" }}
        />
        Paper Trading
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/dashboard"} className="nav-link fs-6">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/marketoverview"} className="nav-link fs-6">
              Market Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/pendingOrders"} className="nav-link fs-6">
              Pending Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/executedOrders"} className="nav-link fs-6">
              Executed Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/leaderboard"} className="nav-link fs-6">
              Leaderboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/portfolio"} className="nav-link fs-6">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item px-3">{user?.full_name.toUpperCase()}</li>
        <FontAwesomeIcon
          onClick={openLogoutModal}
          icon={faSignOutAlt}
          style={{
            color: "#e39246",
            height: "25px",
            width: "25px",
            cursor: "pointer",
          }}
        />
      </ul>
      <Modal
        isOpen={showLogoutModal}
        onRequestClose={closeLogoutModal}
        style={customStyles}
        contentLabel="Logout Modal"
      >
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to log out?</p>
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-secondary mx-2" onClick={closeLogoutModal}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
