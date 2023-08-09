import React, { useEffect, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faWallet } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar";
import PortfoliosOverviewGraph from "../../components/Graph/PortfoliosOverviewGraph";
import CurrentMarket from "../../components/currentMarket";
import Modal from "react-modal";
import PurchaseForm from "../../components/purchase-form";
import DepositCard from "../../components/depositCard";
import TransactionHistory from "../../components/transaction-history";
import PortfolioCard from "../../components/portfolioCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WithAuth from "../../components/withAuth";
import { fetchUser } from "../../redux/features/user/userSlice";
import { fetchAllUserPortfolio } from "../../redux/features/userPortfolio/userPortfolioSlice";
import { fetchStocks } from "../../redux/features/stock/stockSlice";
import { fetchAllOrders } from "../../redux/features/order/orderSlice";
//import { decodedToken } from "../../interceptors/jwtDecoder";

const Dashboard = () => {
  const [selectedStock, setSelectedStock] = useState("google");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [selectedStockId, setSelectedStockId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.user_id);
  // const token = useSelector((state) => state.auth.token); Decode the user id from the token instead

  const userPortfolios = useSelector((state) => state.userPortfolio.collection);
  const pendingOrders = useSelector((state) => state.order.collection);

  const handleClick = () => {
    navigate("/portfolio");
  };

  const activeStocks = useSelector((state) => state.stock.collection);

  useEffect(() => {
    dispatch(fetchAllOrders({ user_id }));
    dispatch(fetchStocks());
    dispatch(fetchStocks());
    dispatch(fetchUser(user_id));
    dispatch(fetchAllUserPortfolio(user_id));
  }, [user_id, dispatch]);

  const openModal = (stockName) => {
    const foundStock = activeStocks.find(
      (item) => item.name.toLowerCase() === stockName
    );

    if (foundStock) {
      setSelectedStockId(foundStock.asset_id);
      setSelectedStock(foundStock.name);
      setSelectedStockPrice(foundStock.current_price);
      setIsModalOpen(true);
    } else {
      console.log(`Stock not found: ${stockName}`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStockPrice(0);
    setSelectedStock("google");
  };

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
              <div className="row p-3 border mb-4">
                <div className="col-md-8">
                  <PortfoliosOverviewGraph portfolios={userPortfolios} />
                </div>
                <div className="col-md-4 p-5">
                  <div className="row  justify-content-center mb-5 align-items-center">
                    <div className="card">
                      <div className="card-body d-flex flex-row justify-content-between">
                        <FontAwesomeIcon icon={faWallet} className="fa-3x" />
                        <div>
                          <h3 className="card-title card-text fs-6 fw-bold">
                            {totalAmount} BDT
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
              <div className="row border p-3 mb-4">
                <div className="col-md-7">
                  <h2 className="text-center fs-5">Active Stocks</h2>
                  <CurrentMarket
                    activeStocks={activeStocks}
                    openModal={openModal}
                  />
                  {isModalOpen && (
                    <div className="modal-wrapper">
                      <Modal
                        className="custom-modal"
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                      >
                        <PurchaseForm
                          stock={selectedStock.toLowerCase()}
                          currentPrice={parseFloat(selectedStockPrice)}
                          closeModal={closeModal}
                          buttonTitle={"buy/sell"}
                          portfolios={userPortfolios}
                          stockId={selectedStockId}
                        />
                      </Modal>
                    </div>
                  )}
                </div>
                <div className="col-md-5">
                  <h2
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/pendingOrders")}
                    className="text-center fs-5"
                  >
                    Pending Orders
                  </h2>
                  <div style={{ maxHeight: "700px", overflowY: "auto" }}>
                    <table className="table table-striped border">
                      <thead className="thead-light">
                        <tr>
                          <th className="bg-gray">stock</th>
                          <th className="bg-gray">amount (USD)</th>
                          <th className="bg-gray">side</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userPortfolios &&
                          (Array.isArray(pendingOrders) &&
                          pendingOrders.length > 0 ? (
                            pendingOrders.slice(0,7).map((item, index) => (
                              <tr key={index}>
                                <td>{item.asset_name}</td>
                                <td>{item.transaction_price}</td>
                                <td>{item.transaction_price}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="3">No pending orders</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    {userPortfolios && pendingOrders?.length > 6 && (
                      <span>
                        click{" "}
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/pendingOrders"}
                        >
                          here
                        </Link>{" "}
                        for more
                      </span>
                    )}
                    {!userPortfolios && <span>You have no pending orders</span>}
                  </div>
                </div>
              </div>
              <div className="row p-3 border mb-4">
                <div className="col-md-7">
                  <h2 className="text-center fs-5">Transaction History</h2>
                  <TransactionHistory  marketData={pendingOrders} />
                </div>
                <div className="col-md-5">
                  <h2 className="text-center fs-5">Portfolios</h2>

                  {!userPortfolios && (
                    <p>
                      No portfolios , click{" "}
                      <Link className="text-decoration-none" to={"/portfolio"}>
                        here
                      </Link>{" "}
                      to add one..
                    </p>
                  )}

                  <div
                    className="border p-3"
                    style={{ maxHeight: "400px", overflowY: "auto" }}
                  >
                    {userPortfolios &&
                      userPortfolios?.map((port) => {
                        const totalValue = port.portfolio_stocks.reduce(
                          (total, stock) => total + stock.total_investment,
                          0
                        );
                        return (
                          <PortfolioCard
                            key={port?.id} // Make sure to include a unique key for each item in the list
                            symbol={port?.name.substring(0, 1).toUpperCase()}
                            handleClick={handleClick}
                            name={port?.name}
                            amountTraded={totalValue}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuth(Dashboard);
