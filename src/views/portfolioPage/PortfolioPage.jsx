import React from "react";
import "./PortfolioPage.css";
import MyPieChart from "../../components/piechart/MyPieChart";
import PageHeading from "../../components/page-heading/PageHeading";
import Navbar from "../../components/navbar/Navbar";

const PortfolioPage = () => {
  return (
    <div className="container-fluid">
      <Navbar/>
      <PageHeading title="Portfolio Overview" />
      <div className="row p-1">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
        </div>
      </div>

      <div className="row p-3">
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

export default PortfolioPage;
