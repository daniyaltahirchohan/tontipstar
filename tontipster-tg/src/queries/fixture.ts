import { prisma } from '../services/prisma';
import { ExtractedFixture } from '../types/fixture';

export async function upsertFixtures(fixtures: ExtractedFixture[]) {
    const transactions = fixtures.map(fixture => {
        return prisma.fixture.upsert({
            where: {
                fixtureId: fixture.fixtureId
            },
            update: fixture,
            create: fixture
        });
    });

    try {
        await prisma.$transaction(transactions);
        console.log('All fixtures have been upserted successfully.');
    } catch (error) {
        console.error('Error upserting fixtures:', error);
    }
}

export async function getFixtures() {
    const fixtures = await prisma.fixture.findMany();
    return fixtures;
}

export async function getFixture(fixtureId: string) {
    const fixture = await prisma.fixture.findUnique({
        where: {
            id: fixtureId
        }
    });
    return fixture;
}