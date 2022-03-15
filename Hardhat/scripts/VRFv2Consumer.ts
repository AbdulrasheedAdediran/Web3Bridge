import { ethers } from "hardhat";

async function deployVRF() {
    
    const VRFv2Consumer = await ethers.getContractFactory("VRFv2Consumer");
    const vrfv2consumer = await VRFv2Consumer.deploy(1480);
    await vrfv2consumer.deployed()


    console.log("Deployed to", await vrfv2consumer.address)

    await vrfv2consumer.requestRandomWords()
    const viewRandWords = await vrfv2consumer.randWords();
    
    console.log("Random Num is", viewRandWords);
    
}

deployVRF().catch((error) => {
      console.error(error);
      process.exit(1);
    });