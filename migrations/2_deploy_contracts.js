var Ballot = artifacts.require("./voting-contract.sol");

module.exports = function(deployer) {
  deployer.deploy(Ballot);
};
