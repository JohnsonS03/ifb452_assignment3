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

contract EvaluateContract {
    address public specialist;
    ITokenCreate public tokenContract;

    constructor(address _specialist, address _tokenAddr) {
        specialist = _specialist;
        tokenContract = ITokenCreate(_tokenAddr);
    }

    modifier onlySpecialist() {
        require(msg.sender == specialist, "Only specialist");
        _;
    }

/**

@notice Evaluates a donated organ and updates its status.

@dev This function retrieves an OrganId struct from the token contract, checks if it has been consented to,
then marks it as evaluated with the provided condition, stored in the mapping of organs on the token contract
and emits an event indicating that this request was successfully evaluated.

@param organId The unique identifier of the donated organ being evaluated.

@param condition A string describing the current state or health status of the organ after evaluation.
*/
    function evaluate(uint256 organId, string memory condition) public onlySpecialist {
        ITokenCreate.OrganId memory o = tokenContract.getOrgan(organId);
        require(o.isConsented, "Not consented");
        require(!o.isEvaluated, "Organ has been evaluated and given a condition");
        o.condition = condition;
        o.isEvaluated = true;
        o.isStored = true;
        tokenContract.updateOrgan(organId, o);
    }
}
