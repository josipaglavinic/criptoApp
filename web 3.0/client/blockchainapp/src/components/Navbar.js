import React from "react";
import logo from "../images/ethereum.png";
import "../styles/navbar.css";

//https://money.com/best-crypto-wallets/
const Navbar = () => {
  return (
    <nav>
      <div className="nav-bar">
        <img src={logo} alt="logo" />
        <div className="links">
          <a
            href="https://coinmarketcap.com/currencies/ethereum/"
            target="_blank"
            rel="noreferrer"
          >
            Market
          </a>
          <a
            href="https://crypto.com/exchange/"
            target="_blank"
            rel="noreferrer"
          >
            Exchange
          </a>
          <a
            href="https://www.udemy.com/courses/finance-and-accounting/cryptocurrency-and-blockchain/"
            target="_blank"
            rel="noreferrer"
          >
            Tutorials
          </a>
          <a
            href="https://money.com/best-crypto-wallets/"
            target="_blank"
            rel="noreferrer"
          >
            Wallets
          </a>
        </div>
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
