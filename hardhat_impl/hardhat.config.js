require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"})

/** @type import('hardhat/config').HardhatUserConfig */

GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.17",
  networks : {
    goerli : {
      url : GOERLI_RPC_URL,
      accounts : [PRIVATE_KEY],
      chainId : 5
    }
  }
};
