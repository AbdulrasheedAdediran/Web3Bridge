import { ethers } from "hardhat";



async function deployNFT() {
// get contract
const MaxiNFT = await ethers.getContractFactory("MaxiNFT");
// Deploy contract
  const maxinft = await MaxiNFT.deploy();
await maxinft.deployed();
// Address to and NFT URI
await maxinft.mintNFT("0xe66904a5318f27880bf1d20D77Ffa8FBdaC5E5E7", "ipfs://QmUDJav6jfUB6JZuwn1sSKDgFDg9WwUj8LDeU3xoRiZNfy")
    
    console.log(await maxinft.address)
}

deployNFT().catch((error) => {
      console.error(error);
      process.exit(1);
    });
