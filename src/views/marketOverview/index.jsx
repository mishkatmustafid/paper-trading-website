import React, { useState } from "react";
import StockCircle from "../../components/stockCircle";
import "./index.css";
import {
  faGoogle,
  faBitcoin,
  faAmazon,
  faApple,
  faFacebook,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import MarketOrders from "../../components/marketOrders";
import SingleStock from "../../components/Graph/SingleStock";
import CurrentMarket from "../../components/currentMarket";
import Modal from "react-modal";
import PurchaseForm from "../../components/purchase-form";
import { CurrentMarketData, stockData } from "../../Utils/marketData";
import Navbar from "../../components/navbar";
import PageHeading from "../../components/page-heading";
import WithAuth from "../../components/withAuth";

const MarketOverview = () => {
  const [selectedStock, setSelectedStock] = useState("google");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const openModal = (stock) => {
    console.log(stock);
    const foundStock = CurrentMarketData.find((item) => item.code === stock);
    console.log("found", foundStock)
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

  const stockListData = [
    { icon: faAmazon, stockName: "amazon" },
    { icon: faBitcoin, stockName: "bitcoin" },
    { icon: faGoogle, stockName: "google" },
    { icon: faApple, stockName: "apple" },
    { icon: faFacebook, stockName: "facebook" },
    { icon: faMicrosoft, stockName: "microsoft" },
  ];

  const handleListClick = (stockName) => {
    setSelectedStock(stockName);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row p-1 mt-6">
        <PageHeading title="Market Overview" />
        <div className="col-md-4  text-start">
          <div className="container">
            <h6 className="text-center">Avialable Products</h6>
            <ol className="scroll-container list-unstyled p-3  border rounded">
              {stockListData.map((item) => {
                return (
                  <li
                    key={item.stockName}
                    value={item.stockName}
                    onClick={() => handleListClick(item.stockName)}
                    className="mb-2 p-2 border rounded"
                  >
                    <StockCircle icon={item.icon} stockName={item.stockName} />
                  </li>
                );
              })}
            </ol>
          </div>
          <div>
            <hr />
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
        </div>
        {selectedStock && (
          <div className="col-md-8">
            <div>
              <SingleStock
                data={stockData[selectedStock].graphData} // Use the graphData for the selected stock
                title={selectedStock}
              />
              <div className="row bg-light">
                <div className="col-md-6 p-2 ">
                  <MarketOrders
                    marketData={stockData[selectedStock].buyMarketData}
                    title="BUY SIDE ORDERS"
                  />
                </div>
                <div className="col-md-6 p-2 ">
                  <MarketOrders
                    marketData={stockData[selectedStock].sellMarketData}
                    title="SELL SIDE ORDERS"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithAuth(MarketOverview);
