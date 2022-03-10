import { ethers } from "hardhat";



async function deployNFT() {

const MaxiNFT = await ethers.getContractFactory("MaxiNFT");
const maxinft = await MaxiNFT.deploy();
await maxinft.deployed();

await maxinft.mintNFT("0xe66904a5318f27880bf1d20D77Ffa8FBdaC5E5E7", "ipfs://QmVuUUos55Rd9X9M2FmjfX88Ef7LNN5JiNWb3AM5okWvSn")
    
    console.log(await maxinft.address)
}

deployNFT().catch((error) => {
      console.error(error);
      process.exit(1);
    });
