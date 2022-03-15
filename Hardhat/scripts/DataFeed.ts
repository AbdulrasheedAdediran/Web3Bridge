import { ethers } from "hardhat";

async function deployContract(){
    // const AVAXtoUSD	= "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD";
    const ATOMtoETH	=	"0xc751E86208F0F8aF2d5CD0e29716cA7AD98B5eF5";
    const DataFeed = await ethers.getContractFactory("PriceConsumerV3");
    const datafeed = await DataFeed.deploy(ATOMtoETH)
    datafeed.deployed();


    const tokenPrice = await datafeed.getLatestPrice(); 
    

        console.log("Token price is", tokenPrice);
    

}

deployContract().catch((error) => {
      console.error(error);
      process.exit(1);
    });