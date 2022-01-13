import React, { useContext } from "react";
import "../styles/welcome.css";
import ethereum from "../images/ethereum.png";
import Input from "./Input";

import { TransactionContext } from "../context/TransactionContext";

const Welcome = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div className="welcome-content">
      <div className="welcome">
        <h1 className="welcome-title">Send Crypro across the world</h1>
        <p>
          Explore the crypro world. Buy and sell cryprocurrencies easily on
          Cripto.
        </p>

        {!currentAccount && (
          <div className="button-connect">
            <button onClick={connectWallet} className="connect-wallet">
              Connect to wallet
            </button>
          </div>
        )}
      </div>

      <div className="card-conteiner">
        <div className="card">
          <img src={ethereum} alt="ethereum" />
        </div>

        <div className="inputs-container">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
