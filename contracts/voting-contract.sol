// jdougl

pragma solidity 0.5.16;

/// @title Voting with delegation

contract ballot {
    string public candidate;
	
	// This declares a structure holding variables
	// This will represent a single voter
	struct Voter {
		bool voted; // has the user already voted?
		address delegate; // address of user delegated to 
		uint vote; // index of voted proposal
	}

	// represents a single proposal
	struct Proposal {
		bytes32 name; // short name of proposal
		uint voteCount; // number of accumulated vote on proposal
	}

	// this declares a state variable that
	// stores a 'Voter' struct for possibel addresses
	mapping(address => Voter) public voters;

	// A dynamically-sized array of `Proposal` structs.
    Proposal[] public proposals;

	/// Create a new ballot to choose one of `proposalNames`.
    constructor(bytes32[] memory proposalNames) public {

        // For each of the provided proposal names,
        // create a new proposal object and add it
        // to the end of the array.
        for (uint i = 0; i < proposalNames.length; i++) {
            // `Proposal({...})` creates a temporary
            // Proposal object and `proposals.push(...)`
            // appends it to the end of `proposals`.
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    
    /// Give your vote (including votes delegated to you)
    /// to proposal `proposals[proposal].name`.
    function vote(uint proposal) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        sender.vote = proposal;

        // If `proposal` is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[proposal].voteCount += 1;
    }

    /// @dev Computes the winning proposal taking all
    /// previous votes into account.
    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    // Calls winningProposal() function to get the index
    // of the winner contained in the proposals array and then
    // returns the name of the winner
    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }

    // Constructor
    function Election() public {
        candidate = "Candidate 1";
    }
}	
