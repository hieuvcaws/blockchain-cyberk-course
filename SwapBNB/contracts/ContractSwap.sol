// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BNBTrade {
    address public owner;
    address public bnbTokenAddress;
    address public usdtTokenAddress;

    uint256 public exchangeRate = 200;

    event Swap(address indexed user, uint256 bnbAmount, uint256 usdtAmount);

    constructor(address _bnbTokenAddress, address _usdtTokenAddress) {
        owner = msg.sender;
        bnbTokenAddress = _bnbTokenAddress;
        usdtTokenAddress = _usdtTokenAddress;
    }

    function swap(uint256 bnbAmount) external {
        uint256 usdtAmount = bnbAmount * exchangeRate;
        IERC20(usdtTokenAddress).transferFrom(msg.sender, address(this), usdtAmount);
        IERC20(bnbTokenAddress).transfer(msg.sender, bnbAmount);
        emit Swap(msg.sender, bnbAmount, usdtAmount);
    }
}