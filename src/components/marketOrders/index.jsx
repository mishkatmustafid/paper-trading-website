import React from "react";

const MarketOrders = ({ title, marketData }) => {
  return (
    <div className="contaner">
      <h6>{title}</h6>
      <table className="table text-dark border fs-6 text">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Price</th>
            <th>Order Value</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((data, index) => (
            <tr key={index}>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
              <td className="text-danger">{data.ordervalue} USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketOrders;
