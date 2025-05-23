// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITokenCreateEval {
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
    ITokenCreateEval public tokenContract;

    constructor(address _doctor, address _tokenAddr) {
        doctor = _doctor;
        tokenContract = ITokenCreateEval(_tokenAddr);
    }

    modifier onlyDoctor() {
        require(msg.sender == doctor, "Only doctor");
        _;
    }

    function assign(uint256 organId, string memory patient) public onlyDoctor {
        ITokenCreateEval.OrganId memory o = tokenContract.getOrgan(organId);
        require(o.isStored, "Not stored");
        o.donatedTo = patient;
        o.isAssigned = true;
        tokenContract.updateOrgan(organId, o);
    }
}
