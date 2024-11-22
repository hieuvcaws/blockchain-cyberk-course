// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Escrow {
    address public owner;
    address public claimer;
    uint public totalAmount;
    uint public amountPerWithdrawal;
    uint public totalWithdrawals;
    uint public currentWithdrawal;
    bool public isWithdrawn;
    uint public lastWithdrawalTime;
    uint public depositTime;

    error OnlyClaimerCanWithdraw(address _operator);
    error FailedToSendEther(address _operator);
    error AlreadyWithdrawn();
    error InsufficientFunds();
    error NoMoreWithdrawals();

    constructor(address _claimer, uint _totalAmount, uint _n) {
        owner = msg.sender;
        claimer = _claimer;
        totalAmount = _totalAmount;
        amountPerWithdrawal = totalAmount / _n; 
        totalWithdrawals = _n; 
        currentWithdrawal = 0; 
        lastWithdrawalTime = block.timestamp;
    }

    function deposit() public payable {
        require(msg.value == totalAmount, "Deposit must equal total amount");
        depositTime = block.timestamp;
    }

    function withdraw() public {
        if (msg.sender != claimer) revert OnlyClaimerCanWithdraw(msg.sender);
        if (currentWithdrawal >= totalWithdrawals) revert NoMoreWithdrawals();
        if (block.timestamp < depositTime + 1 weeks) revert("Withdrawals can only be made after one week from deposit");
        
        currentWithdrawal++;
        (bool sent, ) = msg.sender.call{value: amountPerWithdrawal}("");
        if (!sent) revert FailedToSendEther(msg.sender);
    }

    function getCurrentWithdrawal() public view returns (uint) {
        return currentWithdrawal;
    }
}
