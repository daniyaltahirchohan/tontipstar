import { prisma } from '../services/prisma';
import { User } from '../types/user';

export async function createUser(user: User) {
    const newUser = await prisma.user.create({
        data: {
            walletAddress: user.walletAddress
        }
    })
    return newUser
}

export async function getUser(user: User) {
  const existingUser = await prisma.user.findUnique({
    where: {
      walletAddress: user.walletAddress,
    },
  });

  return existingUser;
}

export async function getUserById(userId: string) {
    const existingUser = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    return existingUser;
}