export interface Issue {
		 id: string,
		 issueNumber: number,
		 issueCategory: string,
		 issueDescription: string,
		 issueStartDate: Date,
		 issueEndDate: Date,
		 votesFor: number,
		 votesAgainst: number,
		 status: string,
		 votedUids: {}
		//public comments: TicketComment[]) 
}

