import React, { useState, useEffect } from "react";

const PurchaseForm = ({ stock, price, closeModal }) => {
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
console.log("price", price)
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
    e.preventDefault();
    // Perform purchase logic here
    console.log("Purchase submitted:", { stock, quantity, price, total });
    closeModal();
  };

  return (
    <div style={{ width: "500px", marginTop: "90px" }} className="container p-3 shadow-lg bg-light rounded border d-flex justify-content-center align-items-center">
      <h4 className="mx-4">Buy <em className="text-secondary">{stock}</em> stock in <small>$</small></h4> 
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
            className="form-control"
            readOnly
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