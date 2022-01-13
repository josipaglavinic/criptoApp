import React from "react";
import logo from "../images/ethereum.png";
import "../styles/footer.css";
// import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="logo" className="footer-logo" />
          <h2>CRIPTO</h2>
        </div>
        <div>
          <nav>
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
          </nav>
        </div>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/josipa-glavini%C4%87-93565a200/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="author">&copy;Josipa Glavinić</div>
        </a>
      </div>
    </>
  );
};

export default Footer;
