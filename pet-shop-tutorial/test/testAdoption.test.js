const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts) => {
 let adoption;
 let expectedAdopter;

 before(async () => {
     adoption = await Adoption.deployed();
 });

});