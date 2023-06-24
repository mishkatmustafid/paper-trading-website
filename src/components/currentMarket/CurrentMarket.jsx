import React from "react";
import { CurrentMarketData } from "../../Utils/marketData";
import ButtonClick from "../buttonClick/ButtonClick";


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
                <ButtonClick
                  className="btn btn-success"
                  title="buy"
                  onClick={() => openModal(item.code)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default CurrentMarket;