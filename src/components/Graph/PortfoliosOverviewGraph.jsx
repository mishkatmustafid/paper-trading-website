import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfoliosOverviewGraph = ({ portfolios }) => {
  const generateRandomColor = () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`;

  // Prepare data for the chart
  let data = [];
  if (portfolios?.length > 0) {
    // Create a set of all unique asset names
    const assetNames = new Set();
    portfolios.forEach(portfolio => {
      portfolio.portfolio_stocks.forEach(stock => {
        assetNames.add(stock.asset_name);
      });
    });

    data = Array.from(assetNames).map(assetName => {
      const entry = { name: assetName };
      portfolios.forEach(portfolio => {
        const stock = portfolio.portfolio_stocks.find(stock => stock.asset_name === assetName);
        entry[portfolio.name] = stock ? stock.total_investment : 0;
      });
      return entry;
    });
  }

  return (
    <div className="container-fluid">
      <h2 className="text-center fs-5">Portfolio Overview</h2>
      <div className="mt-4">
        <BarChart width={800} height={500} data={data}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis tickCount={10} domain={[0, 100]}  />
          <Legend />
          {portfolios?.map((portfolio, index) => (
            // Check if the portfolio has stocks before showing it in the legend
            portfolio.portfolio_stocks.length > 0 && (
              <Bar
                key={index}
                dataKey={portfolio.name}
                fill={generateRandomColor()}
              />
            )
          ))}
        </BarChart>
      </div>
    </div>
  );
};

export default PortfoliosOverviewGraph;
