// jdougl

pragma solidity >=0.4.21 <0.7.0;

contract Election {
    
    // Model a Proposal
    struct Proposal {
        uint id;
        string name;
        uint votesFor;
        uint votesAgainst;
        uint totalVotes;

        // true if proposal passed, false if it didn't
        bool passed;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;
    
    // Read/write proposals
    mapping(uint => Proposal) public proposals;
    
    // Store Proposals Count
    uint public proposalsCount;

    constructor() public {
        addProposal("Proposal 1");
        addProposal("Proposal 2");
    }

    function addProposal (string memory _name) private {
        proposalsCount ++;
        proposals[proposalsCount] = Proposal(proposalsCount, _name, 0, 0, 0, false);
    }

    function voteFor (uint _proposalId) public {
        
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid proposal
        require(_proposalId > 0 && _proposalId <= proposalsCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update proposals vote Count
        proposals[_proposalId].votesFor ++;
        proposals[_proposalId].totalVotes ++;
    }

    function voteAgainst (uint _proposalId) public {
        
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid proposal
        require(_proposalId > 0 && _proposalId <= proposalsCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update proposals vote Count
        proposals[_proposalId].votesAgainst ++;
        proposals[_proposalId].totalVotes ++;
    }
}
