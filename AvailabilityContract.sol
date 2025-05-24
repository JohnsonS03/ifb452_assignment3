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

    struct RequestId{
        string patientName;
        bool isApproved;
    }

    function getOrgan(uint256) external view returns (OrganId memory);
    function updateOrgan(uint256, OrganId memory) external;
    function getRequest(uint256) external view returns (RequestId memory);
    function approveRequest(uint256, RequestId memory) external;
    function createRequest(string memory, bool) external ;
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

    function approveRequest(uint256 requestId) public onlyHealthcare {
        ITokenCreate.RequestId memory r = tokenContract.getRequest(requestId);
        require(!r.isApproved, "Request has been approved and assigned an organ");
        r.isApproved = true;
        tokenContract.updateRequest(requestId, r);
    }
}
