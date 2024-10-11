
export interface FixtureData {
    fixture: {
        id: number;
        date: string;
        venue: {
            name: string;
            city: string;
        };
        status: {
            long: string;
            elapsed: number;
        };
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        season: number;
        round: string;
    };
    teams: {
        home: {
            id: number;
            name: string;
            logo: string;
            winner: boolean;
        };
        away: {
            id: number;
            name: string;
            logo: string;
            winner: boolean;
        };
    };
    score: {
        halftime: {
            home: number;
            away: number;
        };
        fulltime: {
            home: number | null;
            away: number | null;
        };
    };
}


export interface ExtractedFixture {
    fixtureId: number;
    fixtureDate: string;
    venueName: string;
    venueCity: string;
    statusLong: string;
    statusElapsed: number;
    leagueDetails: {
        id: number;
        name: string;
        season: number;
        logo: string;
    };
    teamsDetails: {
        home: {
            id: number;
            name: string;
            logo: string;
        };
        away: {
            id: number;
            name: string;
            logo: string;
        };
    };
    scoreDetails: {
        halftime: {
            home: number;
            away: number;
        };
        fulltime: {
            home: number | null;
            away: number | null;
        };
    };
}
