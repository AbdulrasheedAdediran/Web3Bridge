import { ethers } from "hardhat";

async function main() {
    const MultisigWallet = await ethers.getContractFactory("MultisigWallet");
    const multisigwallet = await MultisigWallet.deploy([
        "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
        "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
        "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
        "0x90f79bf6eb2c4f870365e785982e1f101e93b906",
        "0x15d34aaf54267db7d7c367839aaf71a00a2c6a65"

    ], 5);

    await multisigwallet.deployed();

    console.log("Contract deployed to:", multisigwallet.address);
    
 
}

   main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});