import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: "AMAZON", y: 900 },
  { x: "GOOGL", y: 400 },
  { x: "MICROSOFT", y: 300 },
];

const MyPieChart = () => {
  return (
    <div>
      <VictoryPie
        data={myData}
        colorScale={["blue", "yellow", "red"]}
        radius={100}
      />
    </div>
  );
};

export default MyPieChart;