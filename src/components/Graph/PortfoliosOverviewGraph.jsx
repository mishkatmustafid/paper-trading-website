import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfoliosOverviewGraph = ({portfolios}) => {
  // Dummy data for three portfolios with different stocks


  // Prepare data for the chart
  const data = portfolios.reduce((result, portfolio) => {
    portfolio.stocks.forEach((stock, index) => {
      if (!result[index]) {
        result[index] = { name: stock.name };
      }
      result[index][portfolio.name] = stock.value;
    });
    return result;
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="text-center fs-5">Portfolio Overview</h2>
      <div className="mt-4">
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          {portfolios.map((portfolio, index) => (
            <Bar
              key={index}
              dataKey={portfolio.name}
              fill={`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
              )}, ${Math.floor(Math.random() * 256)}, 0.6)`}
            />
          ))}
        </BarChart>
      </div>
    </div>
  );
};

export default PortfoliosOverviewGraph;
