// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BillingContract {
    address public receptionist;

    constructor() {
        receptionist = msg.sender;
    }

    struct Invoice {
        uint organId;
        string patientName;
        bool generated;
    }

    mapping(uint => Invoice) public invoices;

    event InvoiceGenerated(uint organId, string patientName);

    modifier onlyReceptionist() {
        require(msg.sender == receptionist, "Only receptionist can perform this action.");
        _;
    }

    // Minimal single function for receptionist to create invoice
    function generateInvoice(uint _organId, string memory _patientName) public onlyReceptionist {
        require(!invoices[_organId].generated, "Invoice already exists for this organId.");

        invoices[_organId] = Invoice({
            organId: _organId,
            patientName: _patientName,
            generated: true
        });

        emit InvoiceGenerated(_organId, _patientName);
    }

    // Optional getter retained for frontend communication
    function getInvoice(uint _organId) public view returns (string memory patientName, bool generated) {
        Invoice memory inv = invoices[_organId];
        return (inv.patientName, inv.generated);
    }
}
