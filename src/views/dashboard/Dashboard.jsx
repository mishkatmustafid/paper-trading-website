import React from 'react'
import ButtonClick from '../../components/buttonClick/ButtonClick'
import Graph from '../../components/Graph/Graph'

const Dashboard = () => {
  return (
    <div className='vh-100'>
    {/* Navbar */}
    <nav className="navbar p-3 navbar-expand-lg navbar-dark">
      <div className="navbar-brand">
        <img
          src={require("../../assets/trade_logo.png")}
          alt=""
          className="mx-2"
          style={{ height: "50px" }}
        />
        Paper Trading
      </div>
      <div className="navbar-collapse  justify-content-end">
      <div className="rounded-circle d-flex justify-content-center align-items-center bg-light" style={{ width: '50px', height: '50px' }}>
      <span className="text-primary" style={{ fontSize: '20px' }}>A</span>
    </div>
      </div>
    </nav>
    {/* Main Content */}
    <div className="container-fluid">
      <div className="row vh-50">
        <div className="col-md-6">
          {/* Box 1 - Stock Graph */}
          <div className="box">
          <h2>Stock Graph</h2>
            {/* Add your stock graph component here */}
            <Graph />
          
          </div>
        </div>
        <div className="col-md-6">
          {/* Box 2 - Random Text */}
          <div className="box">
            <h2>Random Text 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="row vh-50">
        <div className="col-md-6">
          {/* Box 3 - Random Text */}
          <div className="box">
            <h2>Random Text 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-md-6">
          {/* Box 4 - Random Text */}
          <div className="box">
            <h2>Random Text 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard
