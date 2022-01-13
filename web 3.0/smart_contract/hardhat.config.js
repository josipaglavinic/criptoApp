require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/lknVH737ZBKJf0ZT_g15BjchAnejYMWP",
      accounts: [
        "b851c61c105a8c0a935e9e758a097dd7fc1f14dce8d60931b76b166870124368",
      ],
    },
  },
};
