import React from "react";
import MarketView from "../marketView/MarketView";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StockCircle from "../../components/stockCircle/StockCircle";
import "./MarketOverview.css";
import {
  faGoogle,
  faBitcoin,
  faIbm,
  faApple,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import MarketOrders from "../../components/marketOrders/MarketOrders";

const MarketOverview = () => {
  const data = [
    { month: "Jan", price: 4 },
    { month: "Feb", price: 8 },
    { month: "Mar", price: 11.56 },
    { month: "Apr", price: 1.58 },
    { month: "May", price: 5.75 },
    { month: "Jun", price: 7.85 },
  ];

  return (
    <div className="container-fluid  p-1">
      {/* navbar ; make it a component to resuse*/}
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
      <div>
        <h2 className="text-center">Market Overview</h2>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-4  text-start">
          {/* Content for the first column */}

          <div>
            <h4 className="text-center">Avialable Products</h4>
            <div className="providerdata">
              <div>
                <StockCircle icon={faAmazon} stockName={"AMAZON"} />
              </div>
              <div>
                <StockCircle icon={faBitcoin} stockName={"IBM"} />
              </div>
              <div>
                <StockCircle icon={faAmazon} stockName={"AMAZON"} />
              </div>
              <div>
                <StockCircle icon={faBitcoin} stockName={"IBM"} />
              </div>
              <div>
                <StockCircle icon={faAmazon} stockName={"AMAZON"} />
              </div>
              <div>
                <StockCircle icon={faBitcoin} stockName={"IBM"} />
              </div>
              <div>
                <StockCircle icon={faBitcoin} stockName={"BITCOIN"} />
              </div>
              <div>
                <StockCircle icon={faGoogle} stockName={"GOOGLE"} />
              </div>
              <div>
                <StockCircle icon={faApple} stockName={"APPLE"} />
              </div>
            </div>
          </div>
          <div>
            <hr />
            <MarketView />
          </div>
        </div>
        <div className="col-md-8">
          {/* Content for the second column */}

          <div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h4>GOOGLE</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="price" stroke="blue" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
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
