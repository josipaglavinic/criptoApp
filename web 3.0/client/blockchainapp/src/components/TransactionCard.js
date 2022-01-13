import React from "react";

const TransactionCard = ({ transaction }) => {
  return (
    <div className="transaction">
      <div className="trans-time">{transaction.timestamp}</div>
      <div>
        <label>From:</label>
        <a
          href={`https://ropsten.etherscan.io/address/${transaction.addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          {transaction.addressFrom}
        </a>
      </div>
      <div>
        <label>To:</label>
        <a
          href={`https://ropsten.etherscan.io/address/${transaction.addressTo}`}
          target="_blank"
          rel="noreferrer"
        >
          {transaction.addressTo}
        </a>
      </div>
      <div>
        <label>Amount:</label>
        {transaction.amount} ETH
      </div>
      <div></div>
    </div>
  );
};

export default TransactionCard;
