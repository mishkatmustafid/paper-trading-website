import React from "react";

const TransactionHistory = ({ marketData}) => {
 

  return (
    <div className="contaner">
      <table className="table text-dark border fs-6 text">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Price</th>
            <th>Side</th>
            <th>Date</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((data, index) => (
            <tr key={index}>
              <td>{index % 3 === 0 ? "899" : "675"}</td>
              <td>{index % 2 === 0 ? "0.97" : "5.77"}</td>
              <td className="text-danger">{index % 2 === 0 ? "SELL" : "BUY"}</td>
              <td className="text-muted">24th June 2021 14:54</td>
              <td>{index % 3 === 0 ? "AMZ" : "GOOGL"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
