import { ethers } from "hardhat";

// eslint-disable-next-line no-unused-vars

async function main() {
  const User = await ethers.getContractFactory("Person"); // for geting the contract
  const user = await User.deploy(); // for deployong the contract

  await user.deployed(); // final deploying contract
  interface IUser {
    name: string;
    location: string;
    age: number;
    addr: string;
  }
  const structUser: IUser = {
    name: "Jumoke",
    location: "Abuja",
    age: 16,
    addr: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  };

  const receipt = await user.addUser(structUser);
  const showEvent = await receipt.wait();
  // console.log(showEvent);
//   const findEvent = showEvent.events?.find(
    // (x) => x.event === "ShowUser"
//   );
  const findEvent = showEvent.events[0];
  const args = findEvent?.args;
  console.log(args?._user);
  console.log(await user.viewUser(1));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});