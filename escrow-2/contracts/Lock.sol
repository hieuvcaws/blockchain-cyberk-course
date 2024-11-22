// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Escrow {
    address public owner;
    address public claimer;
    uint public amount;
    bool public isWithdrawn;
    uint public deadline; // Thêm biến deadline

    error OnlyClaimerCanWithdraw(address _operator);
    error FailedToSendEther(address _operator);
    error AlreadyWithdrawn();
    error DeadlineExceeded();

    constructor(address _claimer, uint _duration) {
        owner = msg.sender;
        claimer = _claimer;
        deadline = block.timestamp + _duration; // Khởi tạo deadline
    }

    function deposit() public payable {
        amount += msg.value;
    }

    function withdraw() public {
        if (isWithdrawn) revert AlreadyWithdrawn();
        if (msg.sender != claimer) revert OnlyClaimerCanWithdraw(msg.sender);
        if (block.timestamp > deadline) revert DeadlineExceeded(); // Kiểm tra deadline
        (bool sent, ) = msg.sender.call{value: amount}("");
        if (!sent) revert FailedToSendEther(msg.sender);
        isWithdrawn = true;
    }
}