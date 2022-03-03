
import { ethers } from "hardhat";

async function main() {
    
    const Institution = await ethers.getContractFactory("Institution");
    const institution = await Institution.deploy()

    await institution.deployed();

    const sch:  {
        name: string,
        established: number,
        location: string
    } = {
        name: "FUT Minna",
        established: 1980,
        location: "Niger State"
    }

    const receipt = await institution.addSchool(sch);
    const displayEvent = await receipt.wait();
//@ts-ignore
    console.log(displayEvent.events[0].args[0]);

     

    
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});