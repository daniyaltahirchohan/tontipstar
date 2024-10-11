import { prisma } from '../services/prisma';
import { Bet, BetParticipant, CreateBet } from '../types/bet';


export async function createBet(bet: CreateBet) {
    return await prisma.$transaction(async (tx) => {
        const betData = await tx.bet.create({
            data: {
                fixtureId: bet.fixtureId,
                creatorId: bet.creatorId,
                description: bet.description,
                amount: bet.amount,
                odds: bet.odds,
                expiryDate: bet.expiryDate
            }
        });
        await tx.betParticipant.create({
            data: {
                betId: betData.id,
                userId: betData.creatorId,
                prediction: bet.prediction,
                isCreator: true
            }
        });
        return betData;
    })
}

export async function getOpenBets() {
    const bets = await prisma.bet.findMany({
        where: {
            status: 'open'
        },
        include:{
            Fixture:true,
            participants:true
        }
    });
    return bets;
}

export async function createBetParticipant(betParticipant: BetParticipant) {
    const betParticipantData = await prisma.betParticipant.create({
        data: betParticipant
    });
    return betParticipantData;
}