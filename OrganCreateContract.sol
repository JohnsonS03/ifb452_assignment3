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

    struct RequestId{
        string patientName;
        bool isApproved;
    }

    address owner;
    mapping(uint256 => RequestId) public requests;
    mapping(uint256 => OrganId) public organs;
    uint256 public organCount;
    uint256 public availableOrgan;
    uint256 public requestCount;
    uint256 public totalRequest;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "only Owner");
        _;
    }

    function createOrgan(string memory _donerName, uint256 _date) external {
        organCount++;
        availableOrgan++;
        organs[organCount] = OrganId(_donerName, _date, "To be evaluated", "To be assigned", true, false, false, false);
    }

    function getOrgan(uint256 _id) external view returns (OrganId memory) {
        return organs[_id];
    }

    function updateOrgan(uint256 _id, OrganId memory _organ) external {
        organs[_id] = _organ;
    }

    function getAvailableOrganCount() public view returns (uint256 count){
        return availableOrgan;
    }

    function createRequest(string memory patientName, bool approved) external {
        requestCount++;
        totalRequest++;
        requests[totalRequest] = RequestId(patientName, approved);
    }

    function getRequest(uint256 _id) external view returns (RequestId memory) {
        return requests[_id];
    }    

    function approveRequest(uint256 _id, RequestId memory _request) external {
        for (uint256 i = 1 ; i <= organCount; i ++) {
            if (organs[i].isAssigned == false) {
                requests[_id] = _request;
                organs[i].donatedTo = _request.patientName;
                organs[i].isAssigned = true;
                availableOrgan--;
                break;
            }
        }
        requestCount--;
    }

    function getAllOrgans() public view returns (uint256 count){
        return organCount;
    }
}
