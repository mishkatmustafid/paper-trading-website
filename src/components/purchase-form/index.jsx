import React, { useState, useEffect } from "react";
import "./index.css";
import SpinnerLoader from "../spinner";
const PurchaseForm = ({ stock, currentPrice, closeModal, buttonTitle }) => {
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [price, setPrice] = useState();
  const [orderType, setOrdertype] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [side, setSide] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    calculateTotal(quantity, price);
  }, [quantity, price]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const calculateTotal = (quantity, price) => {
    const total = quantity * price;
    setTotal(total);
  };


  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    // Perform purchase logic here
    console.log("Purchase submitted:", {
      stock,
      quantity,
      price,
      total,
      orderType,
      portfolio,
    });
  
    //closeModal();
  };

  return (
    <div
      style={{ width: "800px", marginTop: "90px" }}
      className="container p-3 shadow-lg bg-light rounded border d-flex justify-content-center align-items-center"
    >
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
            <option>select side </option> <option value="buy">BUY</option>{" "}
            <option value="sell">SELL</option>
          </select>
        </div>
        <div className="form-group">
          <label className="p-1" htmlFor="totalInput">
            Portfolio
          </label>
          <select
            id="portfolio"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            className="form-control"
            required
          >
            <option>select portfolio </option>{" "}
            <option value="porfolio1">PORT 1</option>{" "}
            <option value="porfolio2">PORT 2</option>
            <option value="porfolio2">PORT 3</option>
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
            <option value="limitOrder">MARKET ORDER</option>{" "}
            <option value="marketOrder">LIMIT ORDER</option>
          </select>
        </div>
      
        <div className="d-flex justify-content-between">
          <button
            style={{ width: "100px" }}
            type="submit"
            className="btn btn-primary btn-sm m-1"
          >
      
         { loading ? <SpinnerLoader /> : buttonTitle}
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
