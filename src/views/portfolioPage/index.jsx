import React, { useState } from "react";
import "./index.css";
import MyPieChart from "../../components/piechart";
import PageHeading from "../../components/page-heading";
import Navbar from "../../components/navbar";
import PurchaseForm from "../../components/purchase-form";
import { CurrentMarketData } from "../../Utils/marketData";
import Modal from "react-modal";
import WithAuth from "../../components/withAuth";

const PortfolioPage = () => {
  const [name, setName] = useState("");
  const [selectedStock, setSelectedStock] = useState("google");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [portfolios, setPortfolios] = useState([
    {
      name: "Portfolio 1",
      dummyData: [
        { label: "AMZ", stock: "amazon", quantity: 10, price: 1500 },
        { label: "GOOGL", stock: "google", quantity: 20, price: 2500 },
        { label: "MS", stock: "microsoft", quantity: 15, price: 1800 },
      ],
    },
  ]);

  const openModal = (stock) => {
    const foundStock = CurrentMarketData.find((item) => item.code === stock.stock);
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

  const addPortfolio = () => {
    if (name) {
      setPortfolios((prevPortfolios) => [
        ...prevPortfolios,
        {
          name: name,
          dummyData: [], // You can initialize this with the initial portfolio data
        },
      ]);
      setName("");
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <PageHeading title="Portfolio Overview" />
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
            placeholder="enter name of new portfolio"
            id="name"
            type="text"
          />
          <button
            style={{ width: "100px", height: "50px" }}
            onClick={addPortfolio}
            className="btn btn-secondary btn-lg m-2"
          >
            add
          </button>
        </div>
        {isModalOpen && (
          <div className="modal-wrapper">
            <Modal
              className="custom-modal"
              isOpen={isModalOpen}
              onRequestClose={closeModal}
            >
              <PurchaseForm
                stock={selectedStock}
                currentPrice={parseFloat(selectedStockPrice.substring(1))}
                closeModal={closeModal}
                buttonTitle={"sell"}
              />
            </Modal>
          </div>
        )}

        {portfolios.map((portfolio, index) => (
          <div key={index} className="container">
            <div className="row mb-3 border">
              <div className="p-4 col-md-8">
                <h3 className="p-3">{portfolio.name}</h3>
                <table className="p-3 table border table-striped">
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th></th>
                      <th>Sell</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.dummyData.map((order, orderIndex) => (
                      <tr key={orderIndex}>
                        <td>{order.label}</td>
                        <td>{order.quantity}</td>
                        <td className="text-danger">{order.price}</td>
                        <td className="text text-success">
                          <span>↑</span>{" "}
                          <span className="text text-primary">↓</span>{" "}
                        </td>
                        <td>
                          <button
                            onClick={() => openModal(order)}
                            className="btn btn-secondary"
                          >
                            sell
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 col-md-4">
                <MyPieChart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithAuth(PortfolioPage);
