// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract FavouriteNumber {
    Uint public favNum;
    
    function set(Uint memory newValue) public {
        favNum = newValue;
    }
    
    function get() external view returns (Uint memory) {
        return favNum;
    }
}
