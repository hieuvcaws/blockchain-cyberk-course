import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Escrow", function () {
  // Fixture to deploy the contract with total amount and number of withdrawals
  async function deployEscrowFixture() {
    const [owner, claimer] = await hre.ethers.getSigners();
    const totalAmount = 100;
    const n = 4;

    const Escrow = await hre.ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(claimer.address, totalAmount, n);

    return { escrow, owner, claimer };
  }

  it("Should allow claimer to withdraw 1 time", async function () {
    const { escrow, claimer } = await loadFixture(deployEscrowFixture);
    await escrow.deposit({ value: 100 });
    expect(await escrow.totalAmount()).to.equal(100);
    
    expect(await escrow.getCurrentWithdrawal()).to.equal(1);
    await expect(escrow.connect(claimer).withdraw())
    .to.changeEtherBalances([claimer, escrow], [25, -25]);
  });
});