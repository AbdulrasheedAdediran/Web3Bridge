import { ethers } from "hardhat";



async function deployNFT() {

const AmalaNFT = await ethers.getContractFactory("FoodNFT");
const amalanft = await AmalaNFT.deploy();
await amalanft.deployed();

await amalanft.mintNFT("ipfs://QmVuUUos55Rd9X9M2FmjfX88Ef7LNN5JiNWb3AM5okWvSn")
    
    console.log(await amalanft.address)
}

deployNFT().catch((error) => {
      console.error(error);
      process.exit(1);
    });
