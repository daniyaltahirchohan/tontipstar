export interface Bet {
    creatorId: string;
    description: string;
    amount: number;
    odds: number;
    status: string;
    expiryDate: Date;
    fixtureId: string;
}

export interface CreateBet extends Bet {
    prediction: string;
}

export interface BetParticipant {
    betId: string;
    userId: string;
    prediction: string;
    isCreator: boolean;
}