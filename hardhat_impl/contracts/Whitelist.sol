//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.9;

contract Whitelist {

    uint8 public maxWhiteListed;

    uint8 public numwhitelisted;

    mapping(address => bool) public whitelistedAddresses;

    constructor(uint8 _maxWhiteListed){
        maxWhiteListed = _maxWhiteListed;
    }

    function addAddressToWhitelist() public{
        require(!whitelistedAddresses[msg.sender], "sender is already verified");
        
        require(numwhitelisted < maxWhiteListed, "Limit reched, More addresses cannot be added");
        
        whitelistedAddresses[msg.sender] = true;

        numwhitelisted+=1;
    }


}