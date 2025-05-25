// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITokenCreate {
    struct OrganId {
        string donerName;
        uint256 dateDonated;
        string condition;
        string donatedTo;
        bool isConsented;
        bool isEvaluated;
        bool isStored;
        bool isAssigned;
    }

    struct RequestId {
        string patientName;
        uint256 assignedOrgan;
    }

    function getOrgan(uint256) external view returns (OrganId memory);

    function updateOrgan(uint256, OrganId memory) external;

    function getRequest(uint256) external view returns (RequestId memory);

    function updateRequest(uint256, RequestId memory) external;

    function createRequest(string memory, bool) external;
}

contract AssignContract {
    address public doctor;
    ITokenCreate public tokenContract;

    constructor(address _doctor, address _tokenAddr) {
        doctor = _doctor;
        tokenContract = ITokenCreate(_tokenAddr);
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
