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

    struct RequestId {
        string patientName;
        bool isApproved;
    }

    function getOrgan(uint256) external view returns (OrganId memory);


    function getRequest(uint256) external view returns (RequestId memory);
}

contract BillingContract {
    address public receptionist;
    ITokenCreate public tokenCreate;

    constructor(address _receptionist, address _tokenCreate) {
        receptionist = _receptionist;
        tokenCreate = ITokenCreate(_tokenCreate);
    }

    struct Invoice {
        uint256 requestId;
        string patientName;
        bool generated;
    }

    mapping(uint => Invoice) public invoices;

    event InvoiceGenerated(uint256 requestId, string patientName);

    modifier onlyReceptionist() {
        require(msg.sender == receptionist, "Only receptionist can perform this action.");
        _;
    }

    // Minimal single function for receptionist to create invoice
    function generateInvoice(uint256 _requestId) public onlyReceptionist {
        require(!invoices[_requestId].generated, "Invoice already exists for this patient.");
        ITokenCreate.RequestId memory r = tokenCreate.getRequest(_requestId);
        require(r.isApproved, "Patient has not been assigned with an organ.");

        invoices[_requestId] = Invoice(_requestId, r.patientName, true);

        emit InvoiceGenerated(_requestId, r.patientName);
    }

    // Optional getter retained for frontend communication
    function getInvoice(uint256 _requestId) public view returns (Invoice memory invoice) {
        Invoice memory inv = invoices[_requestId];
        return inv;
    }
}
