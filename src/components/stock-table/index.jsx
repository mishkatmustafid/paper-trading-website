import React from "react";

const StockTable = () => {
  const stockData = [
    { stock: "GOOGL", price: 2.50, quantity: 1058, rate: -1 },
    { stock: "AMZ", price: 1.80, quantity: 5078, rate: 2.5 },
    { stock: "IBM", price: 0.80, quantity: 8000, rate: 10 },
    { stock: "APPL", price: 0.80, quantity: 8000, rate: 10 },
  ];

  return (
    <table className="table text-light ">
      <thead>
        <tr>
          <th>Stock</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Buy</th>
        </tr>
      </thead>
      <tbody>
        {stockData.map((stockItem, index) => (
          <tr key={index}>
            <td>{stockItem.stock}</td>
            <td>{stockItem.price}</td>
            <td>{stockItem.quantity}</td>
            <td className="text-warning">{stockItem.rate}%</td>
            <td>
              <button className="btn btn-primary">Buy</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
