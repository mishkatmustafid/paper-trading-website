import React from "react";
import Graph from "../../components/Graph/Graph";
import "./Dashboard.css";
import StockTable from "../../components/stock-table/StockTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  const balance = 500;
  return (
    <Navbar />
    // <div className="vh-100  ">
    //   {/* Navbar */}
    //   <Navbar />
    //   {/* Main Content */}
    //   <div className="container-fluid bg-light p-2">
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="box">
    //           <h6>Market Chart</h6>
    //           <hr />

    //           <Graph />
    //         </div>
    //       </div>
    //       <div className="col-md-4">
    //         <h6>Active Stocks</h6>
    //         <hr />
    //         <StockTable />
    //       </div>

    //       <div className="col-md-2">
    //         <div className="box">
    //           <h6>Account Balance</h6>
    //           <div className="card">
    //             <div className="card-body ">
    //               <h6 className="card-title">
    //                 <FontAwesomeIcon icon={faWallet} className="mr-2" />
    //                 Wallet Balance
    //               </h6>
    //               <p className="card-text"> ${balance}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <h6>Portfolios </h6>
    //         <div className="box my-2">
    //           <div className="card">
    //             <div className="card-body ">
    //               <h6 className="card-title">
    //                 <FontAwesomeIcon icon={faWallet} className="mr-2" />
    //                 Portfolio -1
    //               </h6>
    //               <p className="card-text">Amount- ${balance}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="box my-2">
    //           <div className="card">
    //             <div className="card-body ">
    //               <h6 className="card-title">
    //                 <FontAwesomeIcon icon={faWallet} className="mr-2" />
    //                 Portfolio -2
    //               </h6>
    //               <p className="card-text">Amount -${balance}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row ">
    //       <div className="col-md-6">
    //         {/* Box 3 - Random Text */}
    //         <div className="box">
    //           <h6>Random Text 2</h6>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         {/* Box 4 - Random Text */}
    //         <div className="box">
    //           <h6>Random Text 3</h6>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dashboard;
