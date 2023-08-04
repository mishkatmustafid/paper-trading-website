import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faWallet } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar";
import PortfoliosOverviewGraph from "../../components/Graph/PortfoliosOverviewGraph";
import CurrentMarket from "../../components/currentMarket";
import { CurrentMarketData } from "../../Utils/marketData";
import Modal from "react-modal";
import PurchaseForm from "../../components/purchase-form";
import DepositCard from "../../components/depositCard";
import TransactionHistory from "../../components/transaction-history";
import PortfolioCard from "../../components/portfolioCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [selectedStock, setSelectedStock] = useState("google");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/portfolio");
  };

  const openModal = (stock) => {
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
  const totalAmount = 7000;
  const numberOfTrades = 245;

  return (
    <div className="positon-fixed  no-srollbar">
      <Navbar />
      <div className="container-fluid vh-100 bg-white">
        <div className="row">
          <div
            style={{ paddingTop: "90px" }}
            className="col-md-2 bg-light  vh-100 "
          >
            <div className="container1 position-fixed">
              <div class="top"></div>

              <ol
                style={{ width: "300px" }}
                className="buttom list-unstyled p-3 "
              >
                <li
                  // onClick={() => handleListClick(item.stockName)}
                  className="mb-2 p-3 border down rounded"
                  style={{ width: "225px" }}
                >
                  Settings
                </li>
                <li
                  // onClick={() => handleListClick(item.stockName)}
                  className="mb-2 p-3 border rounded down"
                  style={{ width: "225px" }}
                >
                  Help
                </li>
              </ol>
            </div>
          </div>
          <div
            style={{
              marginTop: "60px",
              backgroundColor: "white",
              overflowY: "scroll",
              height: "100vh",
            }}
            className=" col-md-10  vh-100 p-5 "
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
                        <FontAwesomeIcon icon={faWallet} className="fa-3x" />
                        <div>
                          <h3 className="card-title fs-6 fw-bold">
                            ${totalAmount}
                          </h3>
                          <p className="card-text">Amount Traded</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DepositCard />
                  <div className="row justify-content-center align-items-center">
                    <div className="card">
                      <div className="card-body d-flex flex-row justify-content-between">
                        <FontAwesomeIcon
                          icon={faCalculator}
                          className="fa-3x"
                        />
                        <div>
                          <h3 className="card-title fs-6 fw-bold">
                            {numberOfTrades}
                          </h3>
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
                          currentPrice={parseFloat(
                            selectedStockPrice.substring(1)
                          )}
                          closeModal={closeModal}
                          buttonTitle={"buy/sell"}
                        />
                      </Modal>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => navigate("/transactions")}
                  className="col-md-4"
                >
                  <h2 className="text-center fs-5">Pending Orders</h2>
                  <table className="table table-striped border">
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
              <div className="row border mb-4">
                <div className="col-md-8">
                  <h2 className="text-center fs-5">Transaction History</h2>
                  <TransactionHistory marketData={CurrentMarketData} />
                </div>
                <div className="col-md-4">
                  <h2 className="text-center fs-5">Portfolios</h2>
                  <PortfolioCard
                    handleClick={handleClick}
                    name="Portfolio 1"
                    amountTraded={890}
                  />
                  <PortfolioCard
                    handleClick={handleClick}
                    name="Portfolio 2"
                    amountTraded={8950}
                  />
                  <PortfolioCard
                    handleClick={handleClick}
                    name="Portfolio 3"
                    amountTraded={490}
                  />
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
