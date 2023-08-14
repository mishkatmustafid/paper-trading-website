import React from "react";

const CurrentMarket = ({ activeStocks, openModal }) => {
  return (
    <div className="container ">
      <table className="table border">
        <thead className="thead-light">
          <tr>
            <th className="bg-gray">stock</th>
            <th className="bg-gray">Market Cap</th>
            <th className="bg-gray">Price (USD)</th>
            <th className="bg-gray">Purchase</th>
          </tr>
        </thead>
        <tbody>
          {activeStocks?.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.market_cap}</td>
              <td>{item.current_price}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => openModal(item.name.toLowerCase())}
                >
                  buy / sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentMarket;
