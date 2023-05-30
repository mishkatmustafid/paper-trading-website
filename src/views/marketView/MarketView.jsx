import React from "react";
import { data } from "../../Utils/marketData";
import ButtonClick from "../../components/buttonClick/ButtonClick";

const MarketView = () => {
  return (
    <div className="container p-1">
        <h6>Market View</h6>
      <table className="table ">
        <thead className="thead-light">
          <tr>
            <th className="bg-gray">Code</th>
            <th className="bg-gray">Name</th>
            <th className="bg-gray">Currency</th>
            <th className="bg-gray">Market Cap ($m)</th>
            <th className="bg-gray">Price Net Variation</th>
            <th className="bg-gray">Change %</th>
            <th className="bg-gray">Related News</th>
            <th className="bg-gray">Type</th>
            <th className="bg-gray"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.currency}</td>
              <td>{item.marketCap}</td>
              <td>{item.priceNetVariation}</td>
              <td>{item.changePercentage}</td>
              <td>{item.relatedNews}</td>
              <td><ButtonClick className="btn btn-success" title="Equity" /></td>
              <td><ButtonClick className="btn btn-secondary" title="track" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketView;
