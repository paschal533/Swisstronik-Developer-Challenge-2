const ethers = require('ethers');
const hre = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");
const MUMBAI_NODE_URL = `https://polygon-mumbai.infura.io/v3/${process.env.ProjectID}`;
const SWISSTRONIK_NODE_URL = "https://json-rpc.testnet.swisstronik.com/";

/**
 * Send a shielded query/call to the Swisstronik blockchain.
 *
 * @param {object} provider - The provider object for making the call.
 * @param {string} destination - The address of the contract to call.
 * @param {string} data - Encoded data for the function call.
 *
 * @returns {Uint8Array} - Encrypted response from the blockchain.
 */
const sendShieldedQuery = async (provider, destination, data) => {
  // Get the RPC link from the network configuration
  const rpclink = hre.network.config.url;

  // Encrypt the call data using the SwisstronikJS function
  const [encryptedData, usedEncryptedKey] = await encryptDataField(rpclink, data);

  // Execute the call/query using the provider
  const response = await provider.call({
    to: destination,
    data: encryptedData,
  });

  // Decrypt the call result using SwisstronikJS function
  return await decryptNodeResponse(rpclink, response, usedEncryptedKey);
};

async function main() {
  // Address of the deployed contract
  const contractAddress = "0x0Ad424f5EbD0bf829DC4E1e995E153B27223b1af";

  // Get the signer (your account)
  const [signer] = await hre.ethers.getSigners();

  // Construct a contract instance
  const contractFactory = await hre.ethers.getContractFactory("PrivateStateVariable");
  const contract = contractFactory.attach(contractAddress);

  // Send a shielded query to retrieve data from the contract
  const functionName = "getSecretValue";
  const responseMessage = await sendShieldedQuery(signer.provider, contractAddress, contract.interface.encodeFunctionData(functionName));

  // Decode the Uint8Array response into a readable string
  console.log("Decoded response:", contract.interface.decodeFunctionResult(functionName, responseMessage)[0]);
}



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

// Using async/await pattern to handle errors properly
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});