import React, { useState } from "react";
import "./index.css";
import MyPieChart from "../../components/piechart";
import PageHeading from "../../components/page-heading";
import Navbar from "../../components/navbar";
import PurchaseForm from "../../components/purchase-form";
import { CurrentMarketData } from "../../Utils/marketData";
import Modal from "react-modal";
import WithAuth from "../../components/withAuth";
import { createUserPortfolio } from "../../redux/features/userPortfolio/userPortfolioSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PortfolioPage = () => {
  const [name, setName] = useState("");
  const [selectedStock, setSelectedStock] = useState("google");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [portfolios, setPortfolios] = useState([]);
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.user_id);
 
  const successMessage = useSelector(
    (state) => state.userPortfolio.message
  );

  console.log(successMessage)

  const openModal = (stock) => {
    const foundStock = CurrentMarketData.find(
      (item) => item.code === stock.stock
    );
    if (foundStock) {
      setSelectedStock(foundStock.code);
      setSelectedStockPrice(foundStock.priceNetVariation);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStockPrice(0);
    setSelectedStock("google");
  };

  const addPortfolio = (e) => {
    e.preventDefault();
    if (name) {
      console.log("THERE");
      dispatch(
        createUserPortfolio({
          user_id,
          name,
          successCallback: () => {
            console.log("ohhh")
            toast.success(successMessage);
            //fetch all userPorfolios
          },
        })
      );
      setName("")
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <PageHeading title="Portfolio Overview" />
      <ToastContainer />
      <div className="container">
        <div className="p-3 align-items-center ">
          <h5>Create Portfolio</h5>
        </div>
        <div className="pb-5">
          <input
            style={{ width: "500px", height: "50px" }}
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form-control-lg custom-input"
            placeholder="enter name of new portfolio"
            id="name"
            type="text"
          />
          <button
            style={{ width: "100px", height: "50px" }}
            onClick={addPortfolio}
            className="btn btn-secondary btn-lg m-2"
          >
            add
          </button>
     
       {portfolios.length === 0 && <div  style={{width: "500px"}} className="container mt-2 align-items-center bg-light border-1 rounded-2 w-3"><p className="p-3">You have no portfolio. create one before you can buy stocks.. </p></div> }  
        </div>
        {isModalOpen && (
          <div className="modal-wrapper">
            <Modal
              className="custom-modal"
              isOpen={isModalOpen}
              onRequestClose={closeModal}
            >
              <PurchaseForm
                stock={selectedStock}
                currentPrice={parseFloat(selectedStockPrice.substring(1))}
                closeModal={closeModal}
                buttonTitle={"sell"}
              />
            </Modal>
          </div>
        )}

        {portfolios.map((portfolio, index) => (
          <div key={index} className="container">
            <div className="row mb-3 border">
              <div className="p-4 col-md-8">
                <h3 className="p-3">{portfolio.name}</h3>
                <table className="p-3 table border table-striped">
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th></th>
                      <th>Sell</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.dummyData.map((order, orderIndex) => (
                      <tr key={orderIndex}>
                        <td>{order.label}</td>
                        <td>{order.quantity}</td>
                        <td className="text-danger">{order.price}</td>
                        <td className="text text-success">
                          <span>↑</span>{" "}
                          <span className="text text-primary">↓</span>{" "}
                        </td>
                        <td>
                          <button
                            onClick={() => openModal(order)}
                            className="btn btn-secondary"
                          >
                            sell
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 col-md-4">
                <MyPieChart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithAuth(PortfolioPage);
