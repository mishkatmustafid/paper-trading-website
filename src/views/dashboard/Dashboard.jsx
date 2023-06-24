import React, { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faWallet } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import PortfoliosOverviewGraph from "../../components/Graph/PortfoliosOverviewGraph";
import CurrentMarket from "../../components/currentMarket/CurrentMarket";
import { CurrentMarketData } from "../../Utils/marketData";
import Modal from "react-modal";
import PurchaseForm from "../../components/purchase-form/PurchaseForm";

const Dashboard = () => {
  const [selectedStock, setSelectedStock] = useState("google");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const openModal = (stock) => {
    console.log(stock);
    const foundStock = CurrentMarketData.find((item) => item.code === stock);
    console.log("found", foundStock);
    if (foundStock) {
      setSelectedStock(foundStock.code);
      setSelectedStockPrice(foundStock.priceNetVariation);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStockPrice(0);
    setSelectedStock("google");
  };

  const pendingOrders = [
    {
      side: "Buy",
      stock: "AAPL",
      amount: 10,
    },
    {
      side: "Sell",
      stock: "GOOGL",
      amount: 5,
    },
    {
      side: "Buy",
      stock: "MSFT",
      amount: 7,
    },
    {
      side: "Sell",
      stock: "AMZN",
      amount: 3,
    },
  ];

  const portfolios = [
    {
      name: "Portfolio 1",
      stocks: [
        { name: "Stock A", value: 50 },
        { name: "Stock B", value: 30 },
        { name: "Stock C", value: 70 },
      ],
    },
    {
      name: "Portfolio 2",
      stocks: [
        { name: "Stock A", value: 80 },
        { name: "Stock B", value: 40 },
        { name: "Stock C", value: 60 },
      ],
    },
    {
      name: "Portfolio 3",
      stocks: [
        { name: "Stock A", value: 20 },
        { name: "Stock B", value: 60 },
        { name: "Stock C", value: 40 },
      ],
    },
    {
      name: "Portfolio 4",
      stocks: [
        { name: "Stock A", value: 50 },
        { name: "Stock B", value: 80 },
        { name: "Stock C", value: 70 },
      ],
    },
    {
      name: "Portfolio 5",
      stocks: [
        { name: "Stock A", value: 50 },
        { name: "Stock B", value: 90 },
        { name: "Stock C", value: 70 },
        { name: "Stock D", value: 70 },
      ],
    },
  ];
  const totalAmount = 70000;
  return (
    <div className="positon-fixed  no-srollbar">
      <Navbar />
      <div className="container-fluid vh-100 bg-white">
        <div className="row">
          <div
            style={{ paddingTop: "90px" }}
            className="col-md-2 bg-light position-static vh-100 "
          >
            <div className="d-flex flex-column  justify-content-center align-items-center  position-fixed">
              <div className="align-self-start">
                <button className="btn">Portfolios</button>
              </div>
              <div className="d-flex flex-column justify-content-end mt-auto">
                <button className="btn btn-muted btn-md" type="button">
                  Settings
                </button>
                <button className="btn btn-primary btn-md" type="button">
                  Log Out
                </button>
                <button className="btn btn-success btn-md" type="button">
                  Help
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "60px",
              backgroundColor: "white",
              overflowY: "scroll",
              height: "100vh",
            }}
            className=" col-md-10  vh-100 p-3 "
          >
            <div className="scrollable-content">
              <div className="row border mb-4">
                <div className="col-md-8">
                  <PortfoliosOverviewGraph portfolios={portfolios} />
                </div>
                <div className="col-md-4 p-5">
                  <div className="row  justify-content-center mb-5 align-items-center">
                    <div className="card">
                      <div className="card-body d-flex flex-row justify-content-between">
                        <FontAwesomeIcon icon={faWallet} className="fa-5x" />
                        <div>
                          <h3 className="card-title">${totalAmount}</h3>
                          <p className="card-text">Total Amount Traded</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center">
                    <div className="card">
                      <div className="card-body d-flex flex-row justify-content-between">
                        <FontAwesomeIcon
                          icon={faCalculator}
                          className="fa-5x"
                        />
                        <div>
                          <h3 className="card-title">${totalAmount}</h3>
                          <p className="card-text">Number of Trades</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row border mb-4">
                <div className="col-md-8">
                  <h2 className="text-center fs-5">Active Stocks</h2>
                  <CurrentMarket openModal={openModal} />
                  {isModalOpen && (
                    <div className="modal-wrapper">
                      <Modal
                        className="custom-modal"
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                      >
                        <PurchaseForm
                          stock={selectedStock}
                          price={parseFloat(selectedStockPrice.substring(1))}
                          closeModal={closeModal}
                        />
                      </Modal>
                    </div>
                  )}
                </div>
                <div className="col-md-4">
                  <h2 className="text-center fs-5">Pending Orders</h2>
                  <table className="table border">
                    <thead className="thead-light">
                      <tr>
                        <th className="bg-gray">stock</th>
                        <th className="bg-gray">amount (USD)</th>
                        <th className="bg-gray">side</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingOrders.map((item, index) => (
                        <tr key={index}>
                          <td>{item.stock}</td>
                          <td>{item.amount}</td>
                          <td>{item.side}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
