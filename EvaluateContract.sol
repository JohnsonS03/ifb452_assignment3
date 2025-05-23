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

contract EvaluateContract {
    address public specialist;
    ITokenCreateEval public tokenContract;

    constructor(address _specialist, address _tokenAddr) {
        specialist = _specialist;
        tokenContract = ITokenCreateEval(_tokenAddr);
    }

    modifier onlySpecialist() {
        require(msg.sender == specialist, "Only specialist");
        _;
    }

    function evaluate(uint256 organId, string memory condition) public onlySpecialist {
        ITokenCreateEval.OrganId memory o = tokenContract.getOrgan(organId);
        require(o.isConsented, "Not consented");
        o.condition = condition;
        o.isEvaluated = true;
        tokenContract.updateOrgan(organId, o);
    }
}
