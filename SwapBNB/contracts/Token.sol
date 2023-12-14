pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint256 private _totalSupply;
    uint8 private _decimals;

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimal
    ) ERC20(name, symbol) {
        _decimals = decimal;
        _totalSupply = 100_000_000 * 10 ** _decimals;
        _mint(msg.sender, _totalSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}