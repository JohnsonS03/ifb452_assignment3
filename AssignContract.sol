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

    function getOrgan(uint256) external view returns (OrganId memory);
    function updateOrgan(uint256, OrganId memory) external;
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

    function assign(uint256 organId, string memory patient) public onlyDoctor {
        ITokenCreate.OrganId memory o = tokenContract.getOrgan(organId);
        require(o.isStored, "Not stored");
        o.donatedTo = patient;
        o.isAssigned = true;
        tokenContract.updateOrgan(organId, o);
    }
}
