import React from "react";
import { Chart } from "react-google-charts";

const MyPieChart = ({ portfolioStocks }) => {
  const calculateChartData = (stocks) => {
    const totalInvestment = stocks.reduce(
      (total, stock) => total + stock.total_investment,
      0
    );

    return stocks.map((stock) => [stock.asset_name.toLowerCase(), (stock.total_investment / totalInvestment) * 100]);
  };

  const chartData = portfolioStocks.length > 0 ? calculateChartData(portfolioStocks) : [];

  return (
    <div>
      {chartData.length > 0 ? (
        <div>
          <Chart
            width={"100%"}
            height={"400px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[["Stock", "Percentage"], ...chartData]}
            options={{
              pieSliceText: "none",
              legend: { position: "none" },
              chartArea: { left: 20, top: 20, width: "80%", height: "80%" },
            }}
          />
        </div>
      ) : (
        <p className="p-5">No data available for the pie chart.</p>
      )}
    </div>
  );
};

export default MyPieChart;
