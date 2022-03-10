import { ethers } from "hardhat";

async function main() {
    const MultisigWallet = await ethers.getContractFactory("MultisigWallet");
       const [addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners()
    const multisigwallet = await MultisigWallet.deploy([
       addr1.address,
       addr2.address,
        addr3.address,
        addr4.address,
        addr5.address

    ], 3);

    await multisigwallet.deployed();
 
    console.log(addr1.address)
    console.log("Contract deployed to:", multisigwallet.address);
    
 
}

   main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});