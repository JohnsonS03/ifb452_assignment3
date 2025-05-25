// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITokenContract {
    struct RequestId {
        string patientName;
        bool isApproved;
    }

    function getRequest(uint256) external view returns (RequestId memory);
}

contract BillingContract {
    address public receptionist;
    ITokenContract public tokenCreate;

    constructor(address _receptionist, address _tokenCreate) {
        receptionist = _receptionist;
        tokenCreate = ITokenContract(_tokenCreate);
    }

    struct Invoice {
        uint256 requestId;
        string patientName;
        bool generated;
    }

    mapping(uint256 => Invoice) public invoices;

    event InvoiceGenerated(uint256 requestId, string patientName);

    modifier onlyReceptionist() {
        require(
            msg.sender == receptionist,
            "Only receptionist can perform this action."
        );
        _;
    }

    // Minimal single function for receptionist to create invoice
    function generateInvoice(uint256 _requestId) public onlyReceptionist {
        require(
            !invoices[_requestId].generated,
            "Invoice already exists for this patient."
        );
        ITokenContract.RequestId memory r = tokenCreate.getRequest(_requestId);
        require(r.isApproved, "Patient has not been assigned with an organ.");

        invoices[_requestId] = Invoice(_requestId, r.patientName, true);

        emit InvoiceGenerated(_requestId, r.patientName);
    }

    // Optional getter retained for frontend communication
    function getInvoice(uint256 _requestId)
        public
        view
        returns (Invoice memory invoice)
    {
        Invoice memory inv = invoices[_requestId];
        return inv;
    }
}
