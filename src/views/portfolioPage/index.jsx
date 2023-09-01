import React, { useEffect, useState } from "react";
import "./index.css";
import MyPieChart from "../../components/piechart";
import PageHeading from "../../components/page-heading";
import Navbar from "../../components/navbar";
import PurchaseForm from "../../components/purchase-form";
import Modal from "react-modal";
import WithAuth from "../../components/withAuth";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserPortfolio,
  fetchAllUserPortfolio,
} from "../../redux/features/userPortfolio/userPortfolioSlice";

const PortfolioPage = () => {
  const [name, setName] = useState("");
  const [selectedStock, setSelectedStock] = useState("google");
  const [selectedStockId, setSelectedStockId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [refreshData, setRefreshData] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const user_id = useSelector((state) => state.auth.user_id);
  const userPortfolios = useSelector((state) => state.userPortfolio.collection);
  const successMessage = useSelector((state) => state.userPortfolio.message);

  // Fetch user portfolios
  useEffect(() => {
    dispatch(fetchAllUserPortfolio(user_id));
    setRefreshData(false);
    if (error) {
      setTimeout(() => {
        setError("");
      }, [2000]);
    }
  }, [user_id, error, dispatch, refreshData]);

  const openModal = (stock, price, id) => {
    setSelectedStock(stock);
    setSelectedStockId(id);
    setSelectedStockPrice(price);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStockPrice(0);
    setSelectedStock("google");
    setRefreshData(true);
  };

  const addPortfolio = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(
        createUserPortfolio({
          user_id,
          name,
          successCallback: () => {
            toast.success(
              successMessage || "Successfully created the Portfolio!"
            );
            dispatch(fetchAllUserPortfolio(user_id));
          },
        })
      );
      setName("");
    } else {
      setError("Give the portfolio a name first");
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <PageHeading title="Portfolio Overview" />
      <ToastContainer />
      <div className="container">
        <div className="p-3 align-items-center ">
          <h5>Create Portfolio</h5>
        </div>

        <div className="pb-5">
          <input
            style={{ width: "500px", height: "50px" }}
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form-control-lg custom-input"
            placeholder="Enter name of new portfolio"
            id="name"
            type="text"
          />
          <button
            style={{ width: "100px", height: "50px" }}
            onClick={addPortfolio}
            className="btn btn-secondary btn-lg m-2"
          >
            Add
          </button>
          <div>{error && <span className="text-danger">{error}</span>}</div>
          {userPortfolios === undefined && (
            <div
              style={{ width: "500px" }}
              className="container mt-2 align-items-center bg-light border-1 rounded-2 w-3"
            >
              <p className="p-3">
                You have no portfolio. Create one before you can buy stocks.
              </p>
            </div>
          )}
        </div>
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
                buttonTitle={"sell"}
                portfolios={userPortfolios}
                stockId={selectedStockId}
              />
            </Modal>
          </div>
        )}

        {userPortfolios?.map((portfolio, index) => {
          // Calculate total value of stocks in the portfolio
          const totalValue = portfolio.portfolio_stocks.reduce(
            (total, stock) => total + stock.total_investment,
            0
          );

          return (
            <div key={index} className="container ">
              <div className="row mb-3 border rounded-5">
                <div className="p-4 col-md-8">
                  <div className="d-flex justify-content-around">
                    <h3 className="p-3">{portfolio.name}</h3>
                    <h5 className="p-3 text-success"> {totalValue || 0} BDT</h5>
                  </div>

                  <table className="p-3 table border table-striped">
                    <thead>
                      <tr>
                        <th>Stock</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                        <th>Sell</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portfolio.portfolio_stocks.length > 0 ? (
                        portfolio.portfolio_stocks.map((stock, stockIndex) => (
                          <tr key={stockIndex}>
                            <td>{stock.asset_name.toLowerCase()}</td>
                            <td>{stock.quantity}</td>
                            <td className="text-danger">
                              {stock.purchase_price}
                            </td>
                            <td className="text-danger">
                              {stock.total_investment}
                            </td>
                            <td className="text text-success">
                              <span>↑</span>{" "}
                              <span className="text text-primary">↓</span>
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  openModal(
                                    stock.asset_name.toLowerCase(),
                                    stock.purchase_price,
                                    stock.asset_id
                                  )
                                }
                                className="btn btn-secondary"
                              >
                                Sell
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6">
                            <p>
                              You don't own any stock in this portfolio. Click{" "}
                              <Link to="/marketOverview">here</Link> to purchase
                              from the market.
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 col-md-4">
                  <MyPieChart portfolioStocks={portfolio.portfolio_stocks} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WithAuth(PortfolioPage);
