// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;



contract Institution{

struct School{
    string name;
    uint established;
    string location;
}

mapping(string => School) public schools;
event displaySchool (School _sch);

function addSchool(School memory sch) public {
    School storage s = schools[sch.name];
    s.name = sch.name;
    s.established = sch.established;
    s.location = sch.location;
    emit displaySchool (s);
}

function viewSchool(string memory name) public view returns(School memory _school){
School storage s = schools[name];
_school.name = s.name;
_school.established = s.established;
_school.location = s.location;
}


}