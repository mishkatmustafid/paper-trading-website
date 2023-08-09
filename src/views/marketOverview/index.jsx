import React, { useEffect, useState } from "react";
import StockCircle from "../../components/stockCircle";
import "./index.css";
// import {
//   faGoogle,
//   faBitcoin,
//   faAmazon,
//   faApple,
//   faFacebook,
//   faMicrosoft,
// } from "@fortawesome/free-brands-svg-icons";
import MarketOrders from "../../components/marketOrders";
import SingleStock from "../../components/Graph/SingleStock";
import CurrentMarket from "../../components/currentMarket";
import Modal from "react-modal";
import PurchaseForm from "../../components/purchase-form";
import { stockData } from "../../Utils/marketData";
import Navbar from "../../components/navbar";
import PageHeading from "../../components/page-heading";
import WithAuth from "../../components/withAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "../../redux/features/stock/stockSlice";
import { fetchAllUserPortfolio } from "../../redux/features/userPortfolio/userPortfolioSlice";

const MarketOverview = () => {
  const [selectedStock, setSelectedStock] = useState("google");
  const [selectedStockId, setSelectedStockId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const user_id = useSelector((state) => state.auth.user_id);
  // const token = useSelector((state) => state.auth.token); Decode the user id from the token instead

  const userPortfolios = useSelector((state) => state.userPortfolio.collection);
  const dispatch = useDispatch();

  const activeStocks = useSelector((state) => state.stock.collection);

  const openModal = (stock) => {
    console.log( "dfsdf"+stock)
    const foundStock = activeStocks.find((item) => item.name.toLowerCase() === stock);
    if (foundStock) {
      setSelectedStockId(foundStock.asset_id)
      setSelectedStock(foundStock.name.toLowerCase());
      setSelectedStockPrice(foundStock.current_price);
      setIsModalOpen(true);
    }else{
      console.log("lkkkkkkkk")
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStockPrice(0);
    setSelectedStock("google");
  };



  // const stockListData = [
  //   { icon: faAmazon, stockName: "amazon" },
  //   { icon: faBitcoin, stockName: "bitcoin" },
  //   { icon: faGoogle, stockName: "google" },
  //   { icon: faApple, stockName: "apple" },
  //   { icon: faFacebook, stockName: "facebook" },
  //   { icon: faMicrosoft, stockName: "microsoft" },
  // ];

  // function getFaIconName(inputString) {
  //   const capitalized = inputString.charAt(0).toUpperCase() + inputString.slice(1);
  //   return `fa${capitalized}`;
  // }

  const handleListClick = (stockName) => {
    setSelectedStock(stockName);
  };

  useEffect(() => {
    dispatch(fetchAllUserPortfolio(user_id));
    dispatch(fetchStocks())
  },[])

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row p-1 mt-6">
        <PageHeading title="Market Overview" />
        <div className="col-md-4  text-start">
          <div className="container">
            <h6 className="text-center">Avialable Products</h6>
            <ol className="scroll-container list-unstyled p-3  border rounded">
              {activeStocks.map((item) => {
                return (
                  <li
                    key={item.name}
                    value={item.name.toLowerCase()}
                    onClick={() => handleListClick(item.name.trim().toLowerCase())}
                    className="mb-2 p-2 border rounded"
                  >
                    <StockCircle 
                 //   icon={getFaIconName(item.name.toLowerCase())} 
                    stockName={item.name.toLowerCase()} />
                  </li>
                );
              })}
            </ol>
          </div>
          <div>
            <hr />
            <CurrentMarket activeStocks={activeStocks} openModal={openModal} />
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
        </div>
        {selectedStock && (
          <div className="col-md-8">
            <div>
              <SingleStock
                data={stockData[selectedStock].graphData} 
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
