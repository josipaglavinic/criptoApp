import React, { useContext } from "react";
import Loader from "./Loader";

import { TransactionContext } from "../context/TransactionContext";

const Input = () => {
  const { formData, handleChangeEvent, sendTransaction, isLoading } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="inputs">
      <input
        name="addressTo"
        placeholder="Address to"
        className="input"
        onChange={(e) => handleChangeEvent(e, e.target.name)}
      />
      <input
        step="0.0001"
        name="amount"
        placeholder="Amount (ETH)"
        type="number"
        className="input"
        onChange={(e) => handleChangeEvent(e, e.target.name)}
      />
      <input
        name="keyword"
        placeholder="Keyword"
        className="input"
        onChange={(e) => handleChangeEvent(e, e.target.name)}
      />
      <input
        name="message"
        placeholder="Enter message"
        className="input"
        onChange={(e) => handleChangeEvent(e, e.target.name)}
      />
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <button className="connect-wallet" onClick={handleSubmit}>
            Send now
          </button>
        </div>
      )}
    </div>
  );
};

export default Input;
