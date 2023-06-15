import React from "react";
import MarketView from "../marketView/MarketView";
import StockCircle from "../../components/stockCircle/StockCircle";
import "./MarketOverview.css";
import {
  faGoogle,
  faBitcoin,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import MarketOrders from "../../components/marketOrders/MarketOrders";
import SingleStock from "../../components/Graph/SingleStock";

const MarketOverview = () => {
  const data = [
    { stock: "google", month: "Jan", price: 4 },
    { stock: "google", month: "Feb", price: 8 },
    { stock: "google", month: "Mar", price: 11.56 },
    { stock: "google", month: "Apr", price: 1.58 },
    { stock: "google", month: "May", price: 5.75 },
    { stock: "google", month: "Jun", price: 7.85 },
  ];


  return (
    <div className="container-fluid  p-1">
      {/* navbar ; make it a component to resuse*/}
      <nav className="navbar custom-background p-1 navbar-expand-lg navbar-dark">
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
              T
            </span>
          </div>
        </div>
      </nav>
      <div>
        <h6 className="text-center">Market Overview</h6>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-4  text-start">
          {/* Content for the first column */}

          <div  className="container">
            <h6 className="text-center">Avialable Products</h6>
            <ol className="scroll-container custom-list pl-5 pt-3 border">
              <li className="mb-2">
                <StockCircle icon={faAmazon} stockName={"amazon"} />
              </li>
              <li className="mb-2">
                <StockCircle icon={faBitcoin} stockName={"bitcoin"} />
              </li>
              <li className="mb-2">
                <StockCircle icon={faGoogle} stockName={"google"} />
              </li>
              <li className="mb-2">
                <StockCircle icon={faBitcoin} stockName={"bitcoin"} />
              </li>
            <li className="mb-2">
                <StockCircle icon={faGoogle} stockName={"google"} />
              </li>
            <li className="mb-2">
                <StockCircle icon={faBitcoin} stockName={"bitcoin"} />
              </li>
            <li className="mb-2">
                <StockCircle icon={faGoogle} stockName={"google"} />
              </li>
            </ol>
          </div>
          <div>
            <hr />
            <MarketView />
          </div>
        </div>
        <div className="col-md-8">

          <div>
         <SingleStock data={data} title={data[0].stock} />
            <div className="row bg-light">
              <div className="col-md-6 p-2 ">
                <MarketOrders title="BUY SIDE ORDERS" />
              </div>
              <div className="col-md-6 p-2 ">
                <MarketOrders title="SELL SIDE ORDERS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
