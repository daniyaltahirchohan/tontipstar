import { FixtureData } from '../types/fixture';

export function extractFixtureData(data: FixtureData) {
    return {
        fixtureId: data.fixture.id,
        fixtureDate: data.fixture.date,
        venueName: data.fixture.venue.name,
        venueCity: data.fixture.venue.city,
        statusLong: data.fixture.status.long,
        statusElapsed: data.fixture.status.elapsed,
        leagueDetails: {
            id: data.league.id,
            name: data.league.name,
            season: data.league.season,
            logo: data.league.logo
        },
        teamsDetails: {
            home: {
                id: data.teams.home.id,
                name: data.teams.home.name,
                logo: data.teams.home.logo
            },
            away: {
                id: data.teams.away.id,
                name: data.teams.away.name,
                logo: data.teams.away.logo
            }
        },
        scoreDetails: {
            halftime: data.score.halftime,
            fulltime: data.score.fulltime
        }
    };
}
