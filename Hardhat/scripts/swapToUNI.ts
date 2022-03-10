import { ethers, network } from "hardhat";
import {Signer} from "ethers"



// Addresses of accounts and contracts to be interacted with

// Uniswap V2 Router01
//  const UNIROUTER = "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a"

// Uniswap V2 Router 2
const UNIROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
// UNI Contract Address
const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
// USDT Contract Address
const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
// USDT Holder's Address
const USDTHolder = "0xf7b2f3cd946052f8b397f801299b80f053515af9"
// Amount to be swapped
const amountIn = 12e6


//Function that swaps USDT to UNI
async function swap() {
    // USDT Holder set as user interacting with the Uniswap router 
    const usdtSigner: Signer = await ethers.getSigner(USDTHolder)
    const router = await ethers.getContractAt("IRouter", UNIROUTER, usdtSigner)
    const usdtContract = await ethers.getContractAt("IERC20", USDT, usdtSigner) 
    const uniContract = await ethers.getContractAt("IERC20", UNI) 
    console.log(`Uni Balance before swap is ${await uniContract.balanceOf(USDTHolder)} UNI`)
    // console.log("Setting balance to 12345Ether")

    // @ts-ignore
    await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [USDTHolder]
    });

     // Set Balance (From Hardhat Docs)
    // await network.provider.send("hardhat_setBalance", [
    //     USDTHolder,
    //     "0x100000000000000000000000000000"
    // ]);
    
    
    // Approval
    console.log(`Approved ${UNIROUTER} to spend ${amountIn}`);
    await usdtContract.approve(UNIROUTER, amountIn)

    console.log(`Swapping ${amountIn}USDT`);
    
    await router.swapExactTokensForTokens(amountIn, 0, [USDT,UNI], USDTHolder, 1646999730)


    console.log(`Balance after swap is ${await uniContract.balanceOf(USDTHolder)} UNI`);
    

  


}

swap().catch((error) =>{
console.error(error)
process.exitCode = 1})