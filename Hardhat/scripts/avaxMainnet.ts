import { Signer } from "ethers";
import { ethers } from "hardhat"

async function checkAvax() {
    const address = "0x0f4ee9631f4be0a63756515141281a3e2b293bbe";
    const AVAX = await ethers.getContractAt(
        "IERC20", "0x63a72806098Bd3D9520cC43356dD78afe5D386D9"
    )

    const balance = await AVAX.balanceOf(address)
    console.log("Address balance is ", balance)

// @ts-ignore
    await hre.network.provider.request({
  method: "hardhat_impersonateAccount",
  params: [address],
    });
    const signer: Signer = await ethers.getSigner(address)
    await AVAX.connect(signer).transfer("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199", "1103000000000000000")
}

checkAvax().catch((error) =>{
console.error(error)
process.exitCode = 1})