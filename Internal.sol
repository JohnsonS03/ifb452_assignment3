// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExtContract {
 
    address public owner;
    address public doner;
    address public specialist_and_surgeons;
    address public healthcare_department;
    address public doctors_and_practitioner;
    address public reception;

    // Structure to define the structure of a quality contract
    struct OrganId {
        int organId;
        string donerName;
        string dateDonated;
        string condition;
        string donatedTo;
        bool isConsented;
        bool isEvaluated;
        bool isStored;
        bool isAssigned;
    }

    mapping(int => OrganId) public organs; // Store organ data by ID

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

    modifier onlyHealthcare() {
        require(msg.sender == healthcare_department, "Only healthcare department can store the organ.");
        _;
    }

    modifier onlyDoctor() {
        require(msg.sender == doctors_and_practitioner, "Only a doctor can assign the organ.");
        _;
    }

    constructor(address _doner,address _specialist, address _healthcare, address _doctor, address _owner) {
        doner = _doner;
        specialist_and_surgeons = _specialist;
        healthcare_department = _healthcare;
        doctors_and_practitioner = _doctor;
        owner = _owner;
    }

    // Function 1: Donor agrees to consent
    function agreeToConsent(int _organId, string memory _donerName)public onlyDonor {
        OrganId storage organ = organs[_organId];
        organ.donerName = _donerName;
        organ.isConsented = true;
       
    }

    // Function 2: Specialist evaluates the organ health
    function evaluateOrganHealth(int _organId, string memory _condition) public onlySpecialist  {
        OrganId storage organ = organs[_organId];
        require(organ.isConsented, "Organ donation has not been consented.");
        organ.condition = _condition;
        organ.isEvaluated = true;
    }

    // Function 3: Healthcare department stores the organ
    function storeOrgan(int _organId) public onlyHealthcare {
        OrganId storage organ = organs[_organId];
        require(organ.isEvaluated, "Organ health has not been evaluated.");
        organ.isStored = true;
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
