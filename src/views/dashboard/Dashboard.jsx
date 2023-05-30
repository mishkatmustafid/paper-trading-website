import React from "react";
import Graph from "../../components/Graph/Graph";
import "./Dashboard.css";
import StockTable from "../../components/stock-table/StockTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import PortfolioCard from "../../components/portfolio-card/PortfolioCard";

const Dashboard = () => {
  const balance = 500;
  return (
    <div className="vh-100  ">
      {/* Navbar */}
      <nav className="navbar custom-background p-2 navbar-expand-lg navbar-dark">
        <div className="navbar-brand">
          <img
            src={require("../../assets/trade_logo.png")}
            alt=""
            className="mx-2"
            style={{ height: "50px" }}
          />
          Paper Trading
        </div>
        <div className="navbar-collapse  justify-content-end mx-2">
          <div
            className="rounded-circle d-flex justify-content-center align-items-center bg-light"
            style={{ width: "50px", height: "50px" }}
          >
            <span className="text-primary" style={{ fontSize: "20px" }}>
              A
            </span>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="container-fluid bg-dark text-light p-4">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <h4>Market Chart</h4>
              <hr />

              <Graph />
            </div>
          </div>
          <div className="col-md-4">
            <h3>Active Stocks</h3>
            <hr />
            <StockTable />
          </div>

          <div className="col-md-2">
            <div className="box">
              <h4>Account Balance</h4>
              <div className="card">
                <div className="card-body ">
                  <h6 className="card-title">
                    <FontAwesomeIcon icon={faWallet} className="mr-2" />
                    Wallet Balance
                  </h6>
                  <p className="card-text"> ${balance}</p>
                </div>
              </div>
            </div>
            <h4>Portfolios </h4>
            <div className="box my-2">
              <div className="card">
                <div className="card-body ">
                  <h6 className="card-title">
                    <FontAwesomeIcon icon={faWallet} className="mr-2" />
                   Portfolio -1
                  </h6>
                  <p className="card-text">Amount- ${balance}</p>
                </div>
              </div>
            </div>
            <div className="box my-2">
              <div className="card">
                <div className="card-body ">
                  <h6 className="card-title">
                    <FontAwesomeIcon icon={faWallet} className="mr-2" />
                    Portfolio -2
                  </h6>
                  <p className="card-text">Amount -${balance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            {/* Box 3 - Random Text */}
            <div className="box">
              <h4>Random Text 2</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-6">
            {/* Box 4 - Random Text */}
            <div className="box">
              <h4>Random Text 3</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// <div className=" row grid-md-4 mx-2 mt-2 g-3">
// <PortfolioCard />
// <PortfolioCard />
// <PortfolioCard />
// </div>
