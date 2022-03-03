// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// Collection of signatories 
// At least 75% of signatories must agree for a transfer to succeed
// Only approved signatories can initiate and apporve a transaction

contract MultisigWallet{
address[] owners;
mapping(address => bool) signatories;
uint minApprovalRequired;
struct Transaction{
    uint approvalCount;
    uint amount;
    bool status;
    address initiatedBy;
    address addressTo;
}

 constructor (address[] memory _owners, uint _minApprovalRequired){
owners = _owners;
minApprovalRequired = _minApprovalRequired;

for(uint i = 0; i < _owners.length; i++){
    address _owner = _owners[i];
    signatories[_owner] = true;
}
    }

uint txnId = 1;
mapping(uint => Transaction) transactions;
modifier onlyOwners() {
require(signatories[msg.sender] == true, "You do not have access");
_;
}

function initiateTransaction(uint _amount, address _addressTo) public onlyOwners{
    Transaction storage txn = transactions[txnId];
    txn.amount = _amount;
    txn.addressTo = _addressTo;
    txn.initiatedBy = msg.sender;
    txnId++;
}

function approveTransaction() public onlyOwners {
    Transaction storage txn = transactions[txnId];
    require(txn.status == false, "You have already approved this transaction");
    txn.approvalCount++;
    txn.status = true;
}
} // Contract closiing brace