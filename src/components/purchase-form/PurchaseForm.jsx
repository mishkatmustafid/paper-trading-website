import React, { useState } from "react";

const PurchaseForm = ({ stock, closeModal }) => {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    calculateTotal(e.target.value, price);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    calculateTotal(quantity, e.target.value);
  };

  const calculateTotal = (quantity, price) => {
    const total = quantity * price;
    setTotal(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform purchase logic here
    console.log("Purchase submitted:", { stock, quantity, price, total });
    closeModal();
  };

  return (
    <div style={{width: "500px"}} className="container p-3 mt-5 bg-light rounded border d-flex justify-content-center align-items-center">
      <h4 className="mx-4">Buy <em className="text-secondary">{stock} </em> stock</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="p-1" htmlFor="stockInput">Stock:</label>
          <input
            id="stockInput"
            type="text"
            value={stock}
            className="form-control"
            readOnly
          />
        </div>
        <div className="form-group">
          <label className="p-1" htmlFor="quantityInput">Quantity:</label>
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
          <label className="p-1" htmlFor="priceInput">Price:</label>
          <input
            id="priceInput"
            type="number"
            value={price}
            onChange={handlePriceChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="p-1" htmlFor="totalInput">Total:</label>
          <input
            id="totalInput"
            type="number"
            value={total}
            className="form-control"
            readOnly
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary btn-sm m-1">Purchase</button>
          <button type="button" className="btn btn-secondary m-1 btn-sm" onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
