// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITokenContract {
    function createRequest(string memory, bool) external;
}

contract AssignContract {
    address public doctor;
    ITokenContract public tokenContract;

    constructor(address _doctor, address _tokenAddr) {
        doctor = _doctor;
        tokenContract = ITokenContract(_tokenAddr);
    }

    modifier onlyDoctor() {
        require(msg.sender == doctor, "Only doctor");
        _;
    }

    event requestCreated(string patient);

    /**
* @notice Creates a new request.
*
* @dev This function creates a new RequestId struct with provided patient details and calls
the createRequest method of ITokenCreate contract, passing in patient.
*
* @param patient The name of the patient for whom this request is being created.
*/
    function createRequest(string memory patient) public onlyDoctor {
        tokenContract.createRequest(patient, false);
        emit requestCreated(patient);
    }
}
