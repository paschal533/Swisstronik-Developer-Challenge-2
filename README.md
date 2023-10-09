 # Swisstronik Developer Challenge 2

Create a smart contract with a single private state variable (string or uint) and develop functions to modify and retrieve this value. Deploy the contract to the Mumbai testnet and Swisstronik testnet, and write a script to access this variable using the RPC method eth_getStorageAt() on both networks. 

# 🛠 test the smart-contract:

```
npm install

npx hardhat test
```

# 🎡 Access the variable using the RPC method eth_getStorageAt() on both networks

```
npx hardhat run scripts/accessStorage.js
```

# ✔ Deployed Smart Contract address on Swisstronik testnet

```
https://explorer-evm.testnet.swisstronik.com/address/0x0Ad424f5EbD0bf829DC4E1e995E153B27223b1af
```

# ✔ Deployed Smart Contract address on Mumbai testnet

```
https://mumbai.polygonscan.com/address/0x5d8248d29f9d36f44ff81653b8fb4f21b26a4e1c
```
