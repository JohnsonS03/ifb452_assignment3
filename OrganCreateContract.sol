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

    mapping(uint256 => OrganId) public organs;
    uint256 public organCount;

    function createOrgan(string memory _donerName, uint256 _donationDate) external returns (uint256) {
        organCount++;
        organs[organCount] = OrganId(_donerName, _donationDate, "To be evaluated", "To be assigned", true, false, false, false);
        return organCount;
    }

    function getOrgan(uint256 _id) external view returns (OrganId memory) {
        return organs[_id];
    }

    function updateOrgan(uint256 _id, OrganId memory _organ) external {
        organs[_id] = _organ;
    }
}
