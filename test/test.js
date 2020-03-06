// this file defines tests for our smart-contract

var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  var electionInstance;

  // initial test that shows that the files are initialized with two proposals - for now
  it("initializes with two proposals", function() {
    return Election.deployed().then(function(instance) {
      return instance.proposalsCount();
    }).then(function(count) {
      assert.equal(count, 2);
    });
  });

  // the values assigned to the proposals are correct
  it("it initializes the proposals with the correct values", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.proposals(1);
    }).then(function(proposal) {
      assert.equal(proposal[0], 1, "contains the correct id");
      assert.equal(proposal[1], "Proposal 1", "contains the correct name");
      assert.equal(proposal[2], 0, "contains the correct votes count");
      return electionInstance.proposals(2);
    }).then(function(proposal) {
      assert.equal(proposal[0], 2, "contains the correct id");
      assert.equal(proposal[1], "Proposal 2", "contains the correct name");
      assert.equal(proposal[2], 0, "contains the correct votes count");
    });
  });

  // testing that a voter can cast a vote for the proposal
  it("allows a voter to cast a vote for the proposal", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      candidateId = 1;
      return electionInstance.vote(candidateId, { from: accounts[0] });
    }).then(function(receipt) {
      return electionInstance.voters(accounts[0]);
    }).then(function(voted) {
      assert(voted, "the voter was marked as voted");
      return electionInstance.candidates(candidateId);
    }).then(function(candidate) {
      var voteCount = candidate[2];
      assert.equal(voteCount, 1, "increments the candidate's vote count");
    })
  });
});