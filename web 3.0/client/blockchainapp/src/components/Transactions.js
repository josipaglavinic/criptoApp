import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionCard from "./TransactionCard";
import "../styles/transactions.css";
import dummyData from "../utils/dummyData";

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="transaction-container">
      <div className="transactions">
        {currentAccount ? (
          <h3>Latest transaction</h3>
        ) : (
          <h3>Connect yout account</h3>
        )}
        <hr className="transaction-line" />
        <div className="array-transaction">
          {transactions.reverse().map((transaction, id) => (
            <TransactionCard transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
