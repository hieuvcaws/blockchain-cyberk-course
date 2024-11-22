import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Escrow", function () {
  // Fixture to deploy the contract with a deadline
  async function deployEscrowFixture() {
    const [owner, claimer] = await hre.ethers.getSigners();
    const duration = 60; // Thời gian deadline là 60 giây

    const Escrow = await hre.ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(claimer.address, duration);

    return { escrow, owner, claimer };
  }

  it("Test flow", async function () {
    const { escrow, owner, claimer } = await loadFixture(deployEscrowFixture);

    await escrow.deposit({ value: 100 });
    expect(await escrow.amount()).to.equal(100);

    await expect(escrow.withdraw())
      .revertedWithCustomError(escrow, "OnlyClaimerCanWithdraw")
      .withArgs(owner.address);

    await expect(escrow.connect(claimer).withdraw())
      .changeEtherBalances([claimer, escrow], [100, -100]);
  });

  it("Should allow claimer to withdraw before deadline", async function () {
    const { escrow, claimer } = await loadFixture(deployEscrowFixture);

    await escrow.deposit({ value: 100 });
    expect(await escrow.amount()).to.equal(100);

    // Đợi một thời gian ngắn để đảm bảo rằng deadline chưa hết
    await time.increase(30); // Tăng thời gian lên 30 giây

    await expect(escrow.connect(claimer).withdraw())
      .changeEtherBalances([claimer, escrow], [100, -100]);
  });

  it("Should revert when claimer tries to withdraw after deadline", async function () {
    const { escrow, claimer } = await loadFixture(deployEscrowFixture);

    await escrow.deposit({ value: 100 });
    expect(await escrow.amount()).to.equal(100);

    // Đợi cho đến khi deadline hết
    await time.increase(60); // Tăng thời gian lên 60 giây

    await expect(escrow.connect(claimer).withdraw())
      .revertedWithCustomError(escrow, "DeadlineExceeded");
  });
});