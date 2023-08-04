import React from "react";
import { CurrentMarketData } from "../../Utils/marketData";


const CurrentMarket = ({ openModal }) => {
  
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
          {CurrentMarketData.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.marketCap}</td>
              <td>{item.priceNetVariation}</td>
              <td>
                <button
                  className="btn btn-success"
           
                  onClick={() => openModal(item.code)}
                >buy / sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default CurrentMarket;
