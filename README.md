
# Smart Contract Project Readme
This is a beginner-friendly Solidity project that demonstrates the usage of a smart contract on the Goerli test network. The smart contract allows users to set and get a favorite number through its functions. Additionally, it is integrated with a React frontend, where users can connect their wallets and interact with the smart contract.

# Smart Contract Details
The smart contract is named "FavouriteNumber" and is written in Solidity version 0.8.0. It has two main functions:

set: This function allows users to set their favorite number by providing a string value newValue. It can be accessed publicly.

get: This function returns the current favorite number set by a user. It is an external view function, meaning it doesn't modify the contract's state.

# The contract's source code is as follows:

// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract FavouriteNumber {
    string public favNum;

    function set(string memory newValue) public {
        favNum = newValue;
    }

    function get() external view returns (string memory) {
        return favNum;
    }
}

# Deployment and Integration
To use this project, you need to follow these steps:

Deploy the smart contract on the Goerli test network using Remix or your preferred development environment. Make sure to keep note of the deployed contract's address.

Connect the deployed smart contract to the React frontend by importing the contract's ABI (Application Binary Interface) into your frontend code. The ABI is a JSON representation of the contract's functions and their parameters.

Create a "Connect Wallet" button in your React frontend to allow users to connect their wallets (e.g., MetaMask) to the dApp.

Once the wallet is connected, users can call the set and get functions of the deployed smart contract directly from the frontend. The set function can be called to update the favorite number, and the get function can be called to retrieve the current favorite number.

