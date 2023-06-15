import React from "react";

const MarketOrders = ({title}) => {
  const data = [
    { quantity: 100, price: 2.5, ordervalue: 250 },
    { quantity: 750, price: 1.8, ordervalue: 1350 },
    { quantity: 60, price: 0.8, ordervalue: 48 },
    { quantity: 569, price: 0.8, ordervalue: 455.2 },
  ];

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
          {data.map((data, index) => (
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
