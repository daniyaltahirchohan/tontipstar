import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const isDbConnected = async () => {
    try {
        await prisma.$connect();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

