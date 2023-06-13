import React from "react";
import { data } from "../../Utils/marketData";
import ButtonClick from "../../components/buttonClick/ButtonClick";

const MarketView = () => {
  return (
    <div className="container ">
       
     
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th className="bg-gray">stock</th>
            <th className="bg-gray">Market Cap</th>
            <th className="bg-gray">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.marketCap}</td>
              <td>{item.priceNetVariation}</td>
              <td><ButtonClick className="btn btn-success" title="buy" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketView;
