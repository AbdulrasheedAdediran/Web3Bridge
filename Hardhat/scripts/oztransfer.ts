import { ethers } from "hardhat";

async function main() {

    const contractB = await ethers.getContractFactory("B");
    const b = await contractB.deploy();
    await b.deployed()

    console.log("Deployed to", b.address)

    console.log("Full Greeting:", await b.fullGreeting())
}

main().catch((error) => {
      console.error(error);
      process.exit(1);
    });