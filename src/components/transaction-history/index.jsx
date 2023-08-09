import React from "react";

const TransactionHistory = ({ marketData }) => {
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
          {Array.isArray(marketData) && marketData.length > 0 ? (
            marketData.map((data, index) => (
              <tr key={index}>
                <td>{data.quantity}</td>
                <td>{data.transaction_price}</td>
                <td className="text-danger">{data.transaction_type}</td>
                <td className="text-muted">{data.transaction_date}</td>
                <td>{data.asset_name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No transactions</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
