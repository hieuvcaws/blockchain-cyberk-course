import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Contract, ContractFactory, parseEther } from 'ethers';
import { ERC20, BNBTrade } from '../typechain-types';

describe('BNBTrade', () => {
  let swap: BNBTrade;
  let usdt: ERC20;
  let bnb: ERC20;
  let owner: any;
  let user: any;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();

	const BNB = await ethers.getContractFactory("Token");
	bnb = await BNB.deploy("BNB", "BNB", 18);
	const USDT = await ethers.getContractFactory("Token");
	usdt = await USDT.deploy("USDT", "USDT", 18);
	const BNBTrade = await ethers.getContractFactory("BNBTrade");
	swap = await BNBTrade.deploy(bnb, usdt);
	await usdt.transfer(swap, parseEther("100000"));
	await bnb.transfer(swap, parseEther("100000"));
  });

  it('Should swap BNB for USDT', async () => {
    const bnbAmount = Number(ethers.parseEther('1'));
    const expectedUsdtAmount = bnbAmount * 200;

    const usdtToken = await ethers.getContractAt('IERC20', user.address);
    await usdtToken.approve(swap.getAddress(), expectedUsdtAmount);

    await expect(swap.swap(bnbAmount))
      .to.emit(swap, 'Swap')
      .withArgs(user.address, bnbAmount, expectedUsdtAmount);

    const userUsdtBalance = await usdtToken.balanceOf(user.address);
    expect(userUsdtBalance).to.equal(0);

    const contractUsdtBalance = await usdtToken.balanceOf(swap.getAddress());
    expect(contractUsdtBalance).to.equal(expectedUsdtAmount);

    const userBnbBalance = await ethers.provider.getBalance(user.address);
    expect(userBnbBalance).to.equal(ethers.parseEther('99'));
  });
});
