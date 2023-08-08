import React, { useState, useEffect } from "react";
import "./index.css";
import SpinnerLoader from "../spinner";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/features/order/orderSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";
import Modal from "react-modal";

const PurchaseForm = ({
  stock,
  currentPrice,
  buttonTitle,
  closeModal,
  portfolios,
  stockId,
}) => {
  Modal.setAppElement("#root");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [price, setPrice] = useState("");
  const [orderType, setOrdertype] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [side, setSide] = useState("");

  const loading = useSelector((state) => state.order.loading);
  const message = useSelector((state) => state.order.message);
  //const message1 = useSelector((state) => state.portfolioStock.message);
  const dispatch = useDispatch();

  useEffect(() => {
    calculateTotal(quantity, price);
  }, [quantity, price]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const calculateTotal = (quantity, price) => {
    const total = parseFloat(quantity * price);
    setTotal(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss");

    const transactionPayload = {
      asset_id: encodeURI(stockId),
      transaction_type: side,
      transaction_status: "PENDING",
      transaction_date: formattedDate,
      transaction_price: parseFloat(price),
      quantity: parseFloat(quantity),
      order_type: orderType,
      transaction_value: parseFloat(total),
    };

    // const portfolioStockPayload = {
    //   asset_id: encodeURI (stockId),
    //   asset_name: stock,
    //   quantity:parseFloat(quantity),
    //   purchase_date: formattedDate,
    //   purchase_price: parseFloat(price),
    //   total_investment: parseFloat(total),
    // };

    dispatch(
      createOrder({
        data: transactionPayload,
        portfolio_id: portfolio,
        successCallback: () => {
          toast.success(message || "Successfully created the Transaction!");
          setPrice("");
          setQuantity("");
          setSide("");
          setPortfolio("");
          setOrdertype("");
        },
      })
    );
  };

  return (
    <div
      style={{ width: "800px", marginTop: "90px" }}
      className="container p-3 shadow-lg bg-light rounded border d-flex justify-content-center align-items-center"
    >
      <ToastContainer position="bottom-right" />
      <div className="image1 col-md-6 mx-4">
        <h4 className="justify-content-md-start">
          trade <em className="text-secondary">{stock}</em>
        </h4>
      </div>
      <form className="col-md-6 p-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="p-1" htmlFor="stockInput">
            Stock:
          </label>
          <input
            id="stockInput"
            type="text"
            value={stock}
            className="form-control"
            readOnly
          />
        </div>
        <div className="form-group">
          <label className="p-1" htmlFor="quantityInput">
            Quantity:
          </label>
          <input
            id="quantityInput"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="p-1" htmlFor="priceInput">
            Price:
          </label>
          <input
            id="priceInput"
            placeholder={`current price buy: ${currentPrice}`}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="p-1" htmlFor="totalInput">
            Total:
          </label>
          <input
            id="totalInput"
            type="number"
            value={total}
            className="form-control"
            readOnly
          />
        </div>
        <div className="form-group">
          <label className="p-1" htmlFor="totalInput">
            Side
          </label>
          <select
            id="side"
            value={side}
            onChange={(e) => setSide(e.target.value)}
            className="form-control"
            required
          >
            <option>select side </option> <option value="BUY">BUY</option>{" "}
            <option value="SELL">SELL</option>
          </select>
        </div>
        <div className="form-group">
          <label className="p-1" htmlFor="totalInput">
            Portfolio
          </label>

          <select
            id="portfolio"
            onChange={(e) => setPortfolio(e.target.value)}
            className="form-control"
            required
          >
            <option>select portfolio </option>{" "}
            {portfolios?.map((portfolio) => (
              <option
                key={portfolio.portfolio_id}
                value={portfolio.portfolio_id}
              >
                {portfolio.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label className="p-1" htmlFor="totalInput">
            Order Type
          </label>
          <select
            id="orderType"
            value={orderType}
            className="form-control"
            onChange={(e) => setOrdertype(e.target.value)}
            required
          >
            <option>select order type</option>{" "}
            <option value="MARKET">MARKET ORDER</option>{" "}
            <option value="LIMIT">LIMIT ORDER</option>
          </select>
        </div>

        <div className="d-flex justify-content-between">
          <button
            style={{ width: "100px" }}
            type="submit"
            className="btn btn-primary btn-sm m-1"
          >
            {loading ? <SpinnerLoader /> : buttonTitle}
          </button>
          <button
            type="button"
            className="btn btn-secondary m-1 btn-md"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
