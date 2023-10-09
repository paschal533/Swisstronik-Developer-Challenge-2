require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: [process.env.PRIVATE_KEY], //Your private key starting with "0x" 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.ProjectID}`,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};