import React, { useState } from "react";

const PlaceOrder = () => {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    calculateTotal(event.target.value, amount);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    calculateTotal(price, event.target.value);
  };

  const calculateTotal = (price, amount) => {
    const totalPrice = parseFloat(price) * parseFloat(amount);
    setTotal(totalPrice.toFixed(2));
  };

  const handleBuyClick = () => {
    // Handle buy button click event
    console.log("Buy button clicked!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="form-row align-items-center">
              <div className="col">
                <label htmlFor="priceInput">Price:</label>
                <input
                  type="number"
                  className="form-control"
                  id="priceInput"
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>
              <div className="col">
                <label htmlFor="amountInput">Amount:</label>
                <input
                  type="number"
                  className="form-control"
                  id="amountInput"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
              <div className="col">
                <label htmlFor="totalInput">Total:</label>
                <input
                  type="text"
                  className="form-control"
                  id="totalInput"
                  value={total}
                  disabled
                />
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleBuyClick}
                >
                  Buy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
