export interface Bug {
		 id: string,
		 ticketNumber: number,
		 ticketType: string,
		 ticketDate: Date,
		 ticketTimestamp: Date,
		 bugDescription: string,
		 bugFinder: string,
		 assignedDev: string,
		 priority: string,
		 status: string,
		//public comments: TicketComment[]) 
}

