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

    event organIdCreated(string doner, uint256 date, string condition, string donatedTo, bool isConsented, bool isEvaluated, bool isStored, bool isAssigned);
    event requestIdCreated(string patient, bool isApproved);
    event requestApproved(uint256 requestId, string patient);

    /**
 * @notice Creates a new organ ID with provided details.
 *
 * @dev This function creates an OrganId struct and stores it in the mapping of organs, incrementing both organCount and availableOrgan. It also emits an event to notify that an organ has been created.
 *
 * @param _donerName The name of the donor who donated this organ.
 * @param _date The date when this organ was donated.
 */
    function createOrgan(string memory _donerName, uint256 _date) external {
        organCount++;
        availableOrgan++;
        organs[organCount] = OrganId(_donerName, _date, "To be evaluated", "To be assigned", true, false, false, false);
        emit organIdCreated(_donerName, _date, "To be evaluated", "To be assigned", true, false, false, false);
    }

    /**

@notice Retrieves an OrganId struct from the mapping of organs.
@dev This function retrieves and returns an OrganId struct by its ID, if it exists in the mapping.
@param _id The unique identifier of the organ to be retrieved.
@return An OrganId struct with details about the requested organ, or a default value (all fields set to their zero-value) if not found.
*/
    function getOrgan(uint256 _id) external view returns (OrganId memory) {
        return organs[_id];
    }

    /**
@notice Updates an existing OrganId struct in the mapping of organs.
@dev This function updates and replaces the existing OrganId struct with a new one, if it exists in the mapping.
@param _id The unique identifier of the organ to be updated.
**/
    function updateOrgan(uint256 _id, OrganId memory _organ) external {
        organs[_id] = _organ;
    }

    /**

@notice Retrieves the current available organ count.
@dev This function returns the number of organs currently assigned and not yet stored, evaluated or consented.
@return count of available organs in this contract.
*/
    function getAvailableOrganCount() public view returns (uint256 count){
        return availableOrgan;
    }

/**

@notice Creates a new request ID with provided details.
@dev This function creates an RequestId struct and stores it in the mapping of requests, incrementing both requestCount and totalRequest. It also emits an event to notify that a request has been created.
@param patientName The name of the patient who made this request.
@param approved Whether or not this request is approved
*/
    function createRequest(string memory patientName, bool approved) external {
        requestCount++;
        totalRequest++;
        requests[totalRequest] = RequestId(patientName, approved);
        emit requestIdCreated(patientName, approved);
    }

/**

@notice Retrieves a request ID from the mapping of requests.
@dev This function retrieves and returns an RequestId struct by its ID, if it exists in the mapping.
@param _id The unique identifier of the request to be retrieved.
@return An RequestId struct with details about the requested organ, or a default value (all fields set to their zero-value) if not found.
*/
    function getRequest(uint256 _id) external view returns (RequestId memory) {
        return requests[_id];
    }    

/**

@notice Approves a request and assigns an available organ.
@dev This function iterates through all organs, finds one that is not assigned,
 has been consented to, evaluated, stored, but still available, updates the 

 corresponding OrganId struct with the new donor information and emits an event

 indicating approval of a request. It also increments or decrements counters as needed.

@param _id The unique identifier of the request being approved.
**/
    function approveRequest(uint256 _id, RequestId memory _request) external {
        for (uint256 i = 1 ; i <= organCount; i ++) {
            if (organs[i].isAssigned == false && organs[i].isConsented == true && organs[i].isEvaluated == true && organs[i].isStored == true) {
                requests[_id] = _request;
                organs[i].donatedTo = _request.patientName;
                organs[i].isAssigned = true;
                availableOrgan--;
                emit requestApproved(_id, requests[_id].patientName);
                return;
            }
        }
        requestCount--;
    }
}
