// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "hardhat/console.sol";

contract PrivateStateVariable is ReentrancyGuard {

    // Private state variable
    uint256 private secretValue;

    // Events
    event SecretValueModified ( uint256 secretValue );

    // Constructor
    constructor() {
        secretValue = 1;
    }

    /**
     * Function to modify the secret value
     *
     * @dev setSecretValue() modifies the secret value.
     * @param _secretValue - The new uint256 you want to set the secret value as.
     * 
     */
    function setSecretValue(uint256 _secretValue) public {
        secretValue = _secretValue;
        emit SecretValueModified(_secretValue);
    }

    /**
     * Function to retrieve the secret value.
     *
     * @dev getSecretValue() retures the secret value.
     * 
     * @return uint256 .
     */
    function getSecretValue() public view returns (uint256) {
        return secretValue;
    }

}