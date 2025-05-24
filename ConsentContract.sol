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

    /**

@notice Allows a donor to create an organ.

@dev This function creates a new OrganId struct with provided details and calls the createOrgan method of ITokenCreate contract, passing in _name and _date.

@param _name The name of the donated organ being created.

@param _date The date when this donation was made.
*/
    function consent(string memory _name, uint256 _date) public onlyDonor {
        tokenCreate.createOrgan(_name, _date);
    }
}
