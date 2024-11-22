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

  it("Should allow claimer to withdraw in installments after one week", async function () {
    const { escrow, claimer } = await loadFixture(deployEscrowFixture);
    await escrow.deposit({ value: 100 });
    expect(await escrow.totalAmount()).to.equal(100);
  })

  it("Should allow claimer to withdraw in installments", async function () {
    const { escrow, claimer } = await loadFixture(deployEscrowFixture);

    await escrow.deposit({ value: 100});
    expect(await escrow.totalAmount()).to.equal(100);

    // Giải ngân lần đầu tiên
    await expect(escrow.connect(claimer).withdraw())
      .changeEtherBalances([claimer, escrow], [25, -25]);

    // Giải ngân lần thứ hai
    await expect(escrow.connect(claimer).withdraw())
      .changeEtherBalances([claimer, escrow], [25, ]);

    // Giải ngân lần thứ ba
    await expect(escrow.connect(claimer).withdraw())
      .changeEtherBalances([claimer, escrow], [hre.ethers.parseEther("0.25"), -hre.ethers.utils.parseEther("0.25")]);

    // Giải ngân lần thứ tư
    await expect(escrow.connect(claimer).withdraw())
      .changeEtherBalances([claimer, escrow], [hre.ethers.parseEther("0.25"), -hre.ethers.utils.parseEther("0.25")]);

    // Kiểm tra không còn lần nào để giải ngân
    await expect(escrow.connect(claimer).withdraw())
      .revertedWithCustomError(escrow, "NoMoreWithdrawals");
  });

  it("Should revert when claimer tries to withdraw after all installments", async function () {
    const { escrow, claimer } = await loadFixture(deployEscrowFixture);

    await escrow.deposit({ value: hre.ethers.parseEther("1") });
    expect(await escrow.totalAmount()).to.equal(hre.ethers.parseEther("1"));

    // Giải ngân tất cả các lần
    await escrow.connect(claimer).withdraw(); // 1st
    await escrow.connect(claimer).withdraw(); // 2nd
    await escrow.connect(claimer).withdraw(); // 3rd
    await escrow.connect(claimer).withdraw(); // 4th

    // Kiểm tra không còn lần nào để giải ngân
    await expect(escrow.connect(claimer).withdraw())
      .revertedWithCustomError(escrow, "NoMoreWithdrawals");
  });
});