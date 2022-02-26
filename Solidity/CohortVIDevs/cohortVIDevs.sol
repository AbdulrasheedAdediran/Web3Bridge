// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.10;

contract W3BDevs{
  struct CohortSixDev{
        string name;
        string stack;
        uint experience;
        BioData devBioData;
    }
    struct BioData{
        uint age;
        uint phoneNumber;
        string gender;
        string stateOfOrigin;
        mapping(address => uint) regNum;
    }
    struct BioDataWithoutMapping{
        uint age;
        uint phoneNumber;
        string gender;
        string stateOfOrigin;
    }
    struct CohortSixDevComplex{
       string name;
        string stack;
        uint experience;
        BioDataWithoutMapping bdwm;
    }
        
    mapping(string => CohortSixDev) devNames;
    uint regNum;
    uint index = 1;

    function addDev(
        string memory _name, 
        string memory _stack, 
        uint _exp, uint _age, uint _phoneNumber,
        string memory _gender,
        string memory _so, address _address) public {
        CohortSixDev storage csd = devNames[_name];
        csd.name = _name;
        csd.stack = _stack;
        csd.experience = _exp;
        csd.devBioData.age = _age;
        csd.devBioData.phoneNumber = _phoneNumber;
        csd.devBioData.gender = _gender;
        csd.devBioData.stateOfOrigin = _so;
        csd.devBioData.regNum[_address] = regNum;
        index++;
    }

   
    function getDevs(string memory _name) view public returns(CohortSixDevComplex memory cc){
       
        CohortSixDev storage csd = devNames[_name];
        cc.name = csd.name;
        cc.stack = csd.stack;
        cc.experience = csd.experience;
        cc.bdwm.age = csd.devBioData.age;
        cc.bdwm.phoneNumber = csd.devBioData.phoneNumber;
        cc.bdwm.gender = csd.devBioData.gender;
        cc.bdwm.stateOfOrigin = csd.devBioData.stateOfOrigin;
    }

}