const ethers = require('ethers');
const MUMBAI_NODE_URL = `https://polygon-mumbai.infura.io/v3/${process.env.ProjectID}`;
const SWISSTRONIK_NODE_URL = "https://json-rpc.testnet.swisstronik.com/";


const getMumbaiStorage = async (address, slot, block) => {
    const provider = new ethers.JsonRpcProvider(MUMBAI_NODE_URL);
    const storage = await provider.send("eth_getStorageAt", [address, slot, block]);

    // Check if the storage value is a valid bytes32 string.
    if (!ethers.isHexString(storage)) {
        throw new Error('Invalid storage value');
    }

    console.log(storage)

    // Decode the storage value using the ASCII character encoding.
    const value = BigInt(storage).toString();
    console.log(value)
  };

const getSwisstronikStorage = async (address, slot, block) => {
  const provider = new ethers.JsonRpcProvider(SWISSTRONIK_NODE_URL);
  const storage = await provider.send("eth_getStorageAt", [address, slot, block]);
   
  // Check if the storage value is a valid bytes32 string.
  if (!ethers.isHexString(storage)) {
    throw new Error('Invalid storage value');
  }

  // Decode the storage value using the ASCII character encoding.
  //const value = await ethers.decodeBytes32String(storage);

  console.log(storage)

  const value = BigInt(storage).toString();
  console.log(value)

};

getMumbaiStorage("0x5D8248D29F9D36f44Ff81653B8fB4F21B26a4E1c", "0", "latest" )
getSwisstronikStorage("0x0Ad424f5EbD0bf829DC4E1e995E153B27223b1af", "0", "latest" )