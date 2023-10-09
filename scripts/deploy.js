const hre = require("hardhat");

async function main() {
 
  const Contract = await hre.ethers.getContractFactory("PrivateStateVariable");
  const contract = await Contract.deploy();

  await contract.waitForDeployment();

  console.log(`Private State Variable contract deployed to ${ await contract.getAddress()}`);
}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});