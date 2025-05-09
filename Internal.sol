// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Internal {
    address public owner;
    mapping(address => int) public stakeholders; //categorise stakeholders into different access level
    mapping(uint256 => OrganId) public organsToStore;
    mapping(uint256 => OrganId) private organsInStore; // Store organ data by ID

    // Structure to define the structure of a quality contract
    struct OrganId {
        uint256 organId;
        string donerName;
        string dateDonated;
        string condition;
        string donatedTo;
        bool isConsented;
        bool isEvaluated;
        bool isStored;
        bool isAssigned;
    }

    event organIdCreated(uint256 organId, string donerName, string dateDonated, string condition, string donatedTo);
    event organIdStored(uint256 organId, string donerName, string dateDonated, string condition, string donatedTo);
    
    constructor() {
        owner = msg.sender;
        stakeholders[owner] = 1;
    }

    modifier onlyHealthcare() {
        require(stakeholders[msg.sender] == 1, "Only healthcare department can perform this action.");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action.");
        _;
    }

    modifier onlyDonor() {
        require(msg.sender == doner, "Only the donor can consent.");
        _;
    }

    modifier onlySpecialist() {
        require(msg.sender == specialist_and_surgeons, "Only a specialist can evaluate the organ.");
        _;
    }

    modifier onlyDoctor() {
        require(msg.sender == doctors_and_practitioner, "Only a doctor can assign the organ.");
        _;
    }
    // Function 1: Donor agrees to consent
    function agreeToConsent(int _organId, string memory _donerName) public onlyDonor {
        OrganId storage organ = organs[_organId];
        organ.donerName = _donerName;
        organ.isConsented = true;
        organ.dateDonated = block.timestamp.toString(); // Record the date
    }

    // Function 2: Specialist evaluates the organ health
    function evaluateOrganHealth(int _organId, string memory _condition) public onlySpecialist {
        OrganId storage organ = organs[_organId];
        require(organ.isConsented, "Organ donation has not been consented.");
        organ.condition = _condition;
        organ.isEvaluated = true;
    }

    // Function 3: Healthcare department stores the organ
    function storeOrgan(uint256 _organId) public onlyHealthcare {
        require(organsToStore.isEvaluated, "Organ health has not been evaluated.");

        organsInStore[_organId] = organsToStore[_organId];
        delete organsToStore[_organId];

        emit organIdStored(_organId, organsInStore[_organId].donerName, organsInStore[_organId].dateDonated, organsInStore[_organId].condition, organsInStore[_organId].donatedTo);
    }

    // Function 4: Doctor assigns organ to a patient
    function assignOrganToPatient(int _organId, string memory _patient) public onlyDoctor {
        OrganId storage organ = organs[_organId];
        require(organ.isStored, "Organ has not been stored.");
        organ.donatedTo = _patient;
        organ.isAssigned = true;
    }

    // Utility function to get organ details
    function getOrganDetails(int _organId) public view returns (OrganId memory) {
        return organs[_organId];
    }
}
