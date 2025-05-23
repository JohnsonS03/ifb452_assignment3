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

contract AvailableContract {
    address public healthcare;
    ITokenCreate public tokenContract;

    constructor(address _healthcare, address _tokenAddr) {
        healthcare = _healthcare;
        tokenContract = ITokenCreate (_tokenAddr);
    }

    modifier onlyHealthcare() {
        require(msg.sender == healthcare, "Only healthcare");
        _;
    }

    function store(uint256 organId) public onlyHealthcare {
        ITokenCreate.OrganId memory o = tokenContract.getOrgan(organId);
        require(o.isEvaluated, "Not evaluated");
        o.isStored = true;
        tokenContract.updateOrgan(organId, o);
    }
}
