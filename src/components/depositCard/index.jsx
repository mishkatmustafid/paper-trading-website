import React, { useState } from "react";
import "./index.css";
const DepositCard = () => {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(987);

  const handleClick = () => {
    setBalance(parseFloat(amount) + parseFloat(balance));
    console.log(balance);
  };

  return (
    <div className="row justify-content-center mb-5 align-items-center">
      <div className="card">
        <div className="card-body d-flex flex-row ">
          <div>
            <input
              style={{ width: "150px", height: "50px" }}
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              className="form-control-lg p-2 custom-input"
              placeholder="enter amount "
              id="amount"
              type="number"
            />
            <button
              onClick={handleClick}
              className="btn btn-secondary btn-md m-2 "
            >
              Deposit amount
            </button>
          </div>
          <div className="card-body d-flex flex-row">
            <h5> Balance: $ {balance}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositCard;
