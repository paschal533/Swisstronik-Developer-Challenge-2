// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "hardhat/console.sol";

contract PrivateStateVariable is ReentrancyGuard {

    // Private state variable
    string private secretValue;

    // Events
    event SecretValueModified ( string secretValue );

    // Constructor
    constructor(string memory _secretValue) {
        secretValue = _secretValue;
    }

    /**
     * Function to modify the secret value
     *
     * @dev setSecretValue() modifies the secret value.
     * @param _secretValue - The new string you want to set the secret value as.
     * 
     */
    function setSecretValue(string memory _secretValue) public {
        secretValue = _secretValue;
        emit SecretValueModified(_secretValue);
    }

    /**
     * Function to retrieve the secret value.
     *
     * @dev getSecretValue() retures the secret value.
     * 
     * @return string .
     */
    function getSecretValue() public view returns (string memory) {
        return secretValue;
    }

}