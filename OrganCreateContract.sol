// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenCreateContract {
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

    address owner;
    mapping(uint256 => OrganId) public organs;
    uint256 public organCount;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "only Owner");
        _;
    }

    function createOrgan(string memory _donerName) external onlyOwner returns (uint256) {
        organCount++;
        organs[organCount] = OrganId(_donerName, 0, "To be evaluated", "To be assigned", false, false, false, false);
        return organCount;
    }

    function getOrgan(uint256 _id) external view returns (OrganId memory) {
        return organs[_id];
    }

    function updateOrgan(uint256 _id, OrganId memory _organ) external {
        organs[_id] = _organ;
    }
}
