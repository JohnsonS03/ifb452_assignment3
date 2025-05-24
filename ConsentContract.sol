// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITokenCreate {
    function createOrgan(string memory, uint256) external;
}

contract ConsentContract {
    address public donor;
    ITokenCreate public tokenCreate;

    constructor(address _donor, address _tokenCreate) {
        donor = _donor;
        tokenCreate = ITokenCreate(_tokenCreate);
    }

    modifier onlyDonor() {
        require(msg.sender == donor, "Only donor allowed");
        _;
    }

    function consent(string memory _name, uint256 _date) public onlyDonor {
        tokenCreate.createOrgan(_name, _date);
    }
}
