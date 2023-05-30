import React from "react";
import "./StockPage.css";
import MyPieChart from "../../components/piechart/MyPieChart";

const StockPage = () => {
  return (
    <div className="container-fluid page p-3 ">
      <h6>Portfolio Overview</h6>
      <div className="row p-5">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="grid row justify-content-center align-items-center">
          <div
            style={{
              height: "250px",
              width: "200px",
              backgroundColor: "#D9D9D9",
            }}
            className="custom-div mx-4  border "
          >
            <small>Portfolio 1</small>
            <MyPieChart />
            <small>today's PNL:   +$32.5</small>
            <small>yesterday's PNL:    -$62.5</small>
          </div>
          <div
            style={{
              height: "250px",
              width: "200px",
              backgroundColor: "#D9D9D9",
            }}
            className="custom-div   border "
          >
            <small>Portfolio 2</small>
            <MyPieChart />
            <small>today's PNL:   +$32.5</small>
            <small>yesterday's PNL:    -$62.5</small>
          </div>
          <div
            style={{
              height: "250px",
              width: "200px",
              backgroundColor: "#D9D9D9",
            }}
            className="custom-div mx-4  border "
          >
            <small>Portfolio 3</small>
            <MyPieChart />

            <small>today's PNL:   +$32.5</small>
            <small>yesterday's PNL:    -$62.5</small>
          </div>
          <div
            style={{
              height: "250px",
              width: "200px",
              backgroundColor: "#D9D9D9",
            }}
            className="custom-div   border "
          >
            <small>Portfolio 4</small>
            <MyPieChart />

            <small>today's PNL:   +$32.5</small>
            <small>yesterday's PNL:    -$62.5</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockPage;
