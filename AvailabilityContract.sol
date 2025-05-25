// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITokenContract {
    struct RequestId {
        string patientName;
        bool isApproved;
    }

    function getRequest(uint256) external view returns (RequestId memory);

    function approveRequest(uint256, RequestId memory) external;
}

contract AvailableContract {
    address public healthcare;
    ITokenContract public tokenContract;

    constructor(address _healthcare, address _tokenAddr) {
        healthcare = _healthcare;
        tokenContract = ITokenContract(_tokenAddr);
    }

    modifier onlyHealthcare() {
        require(msg.sender == healthcare, "Only healthcare");
        _;
    }

    event requestAppoved(uint256 requestId);

    /**
* @notice Approves a request and assigns an available organ.
*
* @dev This function iterates through all organs, finds one that is not assigned,
has been consented to, evaluated, stored, but still available, updates the
corresponding OrganId struct with the new donor information and emits an event
indicating approval of a request. It also increments or decrements counters as needed.
*
* @param requestId The unique identifier of the request being approved.
*/
    function approveRequest(uint256 requestId) public onlyHealthcare {
        ITokenContract.RequestId memory r = tokenContract.getRequest(requestId);
        require(
            !r.isApproved,
            "Request has been approved and assigned an organ"
        );
        r.isApproved = true;
        tokenContract.approveRequest(requestId, r);
        emit requestAppoved(requestId);
    }
}
