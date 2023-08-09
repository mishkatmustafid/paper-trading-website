// StockCircle.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faBitcoin,
  faMicrosoft,
  faApple,
  faGoogle,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const StockCircle = ({ stockName }) => {
  // Function to generate the FontAwesome icon based on stock name
  const getIconForStock = (stockName) => {
    const lowercaseStockName = stockName.trim().toLowerCase();
    switch (lowercaseStockName) {
      case "amazon":
        return faAmazon;
      case "facebook":
        return faFacebook;
      case "bitcoin":
        return faBitcoin;
      case "microsoft":
        return faMicrosoft;
      case "apple":
        return faApple;
      case "google":
        return faGoogle;
      default:
        return faCircle;
    }
  };

  const icon = getIconForStock(stockName);

  return (
    <div className="container pointer-on-hover">
      <div className="row align-items-center justify-content-center">
        <div className="col-2 p-0">
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "#e39246", height: "30px", width: "30px" }}
          />
        </div>
        <div className="col-10 p-0">
          <h6 className="text-start">{stockName}</h6>
        </div>
      </div>
    </div>
  );
};

export default StockCircle;
