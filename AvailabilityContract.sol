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

contract AvailableContract {
    address public healthcare;
    ITokenCreateEval public tokenContract;

    constructor(address _healthcare, address _tokenAddr) {
        healthcare = _healthcare;
        tokenContract = ITokenCreateEval(_tokenAddr);
    }

    modifier onlyHealthcare() {
        require(msg.sender == healthcare, "Only healthcare");
        _;
    }

    function store(uint256 organId) public onlyHealthcare {
        ITokenCreateEval.OrganId memory o = tokenContract.getOrgan(organId);
        require(o.isEvaluated, "Not evaluated");
        o.isStored = true;
        tokenContract.updateOrgan(organId, o);
    }
}
