import React from "react";
import { VictoryPie } from "victory-pie";

const MyPieChart = ({ portfolioStocks }) => {
  const calculateChartData = (stocks) => {
    const totalInvestment = stocks.reduce(
      (total, stock) => total + stock.total_investment,
      0
    );

    return stocks.map((stock) => ({
      x: stock.asset_name.toUpperCase(),
      y: (stock.total_investment / totalInvestment) * 100,
    }));
  };

  const chartData = portfolioStocks.length > 0 ? calculateChartData(portfolioStocks) : [];

  return (
    <div>
      {chartData.length > 0 ? (
        <VictoryPie
          data={chartData}
          colorScale={["blue", "yellow", "red","green", "brown", "voilet"]}  // You can adjust the color scale as needed
          radius={100}
        />
      ) : (
        <p className="p-5">No data available for the pie chart.</p>
      )}
    </div>
  );
};

export default MyPieChart;
