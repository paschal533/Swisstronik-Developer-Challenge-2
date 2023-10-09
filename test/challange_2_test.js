const { expect } = require('chai');
const { ethers } = require('hardhat');

// Define test suite
describe('PrivateStateVariable', function () {
  let privateStateVariable;

  // Before each test, deploy the contract and set up accounts
  beforeEach(async function () {
    const PrivateStateVariable = await ethers.deployContract('PrivateStateVariable');
    privateStateVariable = await PrivateStateVariable.waitForDeployment();
  });

  // Test the setSecretValue() function
  it("should set the secret value", async () => {
    const newSecretValue = "new secret value";

    // Set the secret value
    await privateStateVariable.setSecretValue(newSecretValue);

    // Get the secret value
    const secretValue = await privateStateVariable.getSecretValue();

    // Expect the secret value to be equal to the new secret value
    expect(secretValue).to.equal(newSecretValue);
  });

  // Test the getSecretValue() function
  it("should get the secret value", async () => {
    const secretValue = "secret value";

    // Set the secret value
    await privateStateVariable.setSecretValue(secretValue);

    // Expect the secret value to be equal to the secret value set in the constructor
    expect(await privateStateVariable.getSecretValue()).to.equal(secretValue);
  });

});