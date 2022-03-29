// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <=0.8.7;



contract A {
string prefix = "My name is";
string name = "Abdulrasheed";

function greeting() external view returns(string memory intro){
intro = string(abi.encodePacked(prefix, name));
}
}

contract B is A {
string profession = " and I am a Software Developer";

function fullGreeting() external view returns (string memory introduction){
    introduction = string(abi.encodePacked(intro, profession));
}
}