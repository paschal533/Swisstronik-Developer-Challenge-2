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

    // Decode the storage value using the ASCII character encoding.
    const value = ethers.decodeBytes32String(stringWithNullTerminator);
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
  
  console.log(storage);
};

getMumbaiStorage("0x622715FE13309981c6Aef4F1787D1143644c7Ce4", "0", "latest" )
getSwisstronikStorage("0x299d39013A53e549f9d2e823BFeC8890b11c946b", "0", "latest" )