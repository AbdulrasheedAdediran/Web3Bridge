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
    txn.approvalCount++;
    txnId++;
}

function approveTransaction(address _owner) public onlyOwners {
    Transaction storage txn = transactions[txnId];
    require(signatories[_owner] == false, "You have already approved this transaction");
    for(uint i = 0; i < owners.length; i++){
    address _owner = owners[i];
    }
    txn.approvalCount++;
    signatories[_owner] = true;
}

function approvalCount(uint _txnId) public onlyOwners returns(uint approvals){
    txnId = _txnId;
    Transaction storage txn = transactions[_txnId];
    approvals = txn.approvalCount;
} 
} // Contract closiing brace