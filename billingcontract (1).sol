// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BillingContract {
    address public receptionist;

    constructor() {
        receptionist = msg.sender;
    }

    struct Invoice {
        uint organId;
        string donor;
        string recipient;
        string dateIssued;
        uint amount;
        bool generated;
    }

    mapping(uint => Invoice) public invoices;

    event InvoiceGenerated(uint organId, string donor, string recipient, string dateIssued, uint amount);

    modifier onlyReceptionist() {
        require(msg.sender == receptionist, "Only receptionist can perform this action.");
        _;
    }

    function generateInvoice(
        uint _organId,
        string memory _donor,
        string memory _recipient,
        string memory _dateIssued,
        uint _amount
    ) public onlyReceptionist {
        require(!invoices[_organId].generated, "Invoice already generated.");

        invoices[_organId] = Invoice({
            organId: _organId,
            donor: _donor,
            recipient: _recipient,
            dateIssued: _dateIssued,
            amount: _amount,
            generated: true
        });

        emit InvoiceGenerated(_organId, _donor, _recipient, _dateIssued, _amount);
    }

    function getInvoice(uint _organId) public view returns (
        string memory donor,
        string memory recipient,
        string memory dateIssued,
        uint amount,
        bool generated
    ) {
        Invoice memory inv = invoices[_organId];
        return (inv.donor, inv.recipient, inv.dateIssued, inv.amount, inv.generated);
    }
}
