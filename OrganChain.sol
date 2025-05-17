// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalDptContract {
    address public doner;
    string private name;
    

    modifier onlyDoner() {
        require(msg.sender == doner, "Only doner can execute this");
        _;
    }

    event AgreeOnContract(bool agree);

    constructor(address theDoner) {
        require(theDoner != address(0), "Invalid doner address");
        doner = theDoner;
        name = "";
    }
}
