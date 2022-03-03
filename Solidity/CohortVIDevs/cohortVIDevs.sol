// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.10;


contract W3BDevs{

    
  struct Cohort{
        string name;
        address[] devs;
        mapping(address => Dev) DevDetails;
    }
    struct Dev{
        string name;
        uint age;
        uint experience;
        string gender;
        string stack;
    }

    struct CohortWithoutMapping{
        string name;
        address[] devs;
    }
 
    mapping(uint => Cohort) CohortId;
    uint index = 1;

   
    function addCohort(string memory _name) public {
        Cohort storage c = CohortId[index];
        c.name = _name;
        index++;
    }

    function addDev(string memory _name, 
    uint _age, uint _exp, 
    string memory _gender, 
    string memory _stack, uint _cohortIndex) public {
        Cohort storage c = CohortId[_cohortIndex];
        c.devs.push(msg.sender);
        c.DevDetails[msg.sender].name = _name;
        c.DevDetails[msg.sender].age = _age;
        c.DevDetails[msg.sender].experience = _exp;
        c.DevDetails[msg.sender].gender = _gender;
        c.DevDetails[msg.sender].stack = _stack;
    }

    function getDevsInfo(uint cohortIndex) view public returns(Dev[] memory d){
       Cohort storage c = CohortId[cohortIndex];
       d = new Dev[](c.devs.length);
       for(uint i = 0; i < c.devs.length; i++){
           d[i] = c.DevDetails[c.devs[i]];
       }
       
    }

    function getAllCohorts() view public returns(CohortWithoutMapping[] memory allCohorts){
        allCohorts = new CohortWithoutMapping[](index);
        for(uint i = 0; i < index; i++){
            Cohort storage c = CohortId[index[i]];
            allCohorts[i].name = CohortId[i+1].name;
            allCohorts[i].devs = CohortId[i+1].devs;
        }
    }

    

 

}


