import axios from "axios";
import { ExtractedFixture, FixtureData } from "../types/fixture";
import { extractFixtureData } from "../utils/utils";
import { upsertFixtures } from "../queries/fixture";
import cron from "node-cron";
require('dotenv').config();

const footballApi = axios.create({
    baseURL: "https://v3.football.api-sports.io",
    headers: {
        "x-apisports-key": process.env.API_SPORTS_API_KEY,

    }
});

export const getFixtures = async () => {
    try {
        const response = await footballApi.get(`/fixtures`,{
            params:{
                live:"all"
            }
        });
        return response.data.response;
    } catch (error) {
        console.log(error);
    }
}



export async function updateDBFixtures() {
    try {
        const fixtures:FixtureData[] = await getFixtures();
        const extractedFixtures:ExtractedFixture[]=fixtures.map((fixture: FixtureData) => {
            return extractFixtureData(fixture)
        })
        upsertFixtures(extractedFixtures);
    } catch (error) {
        console.log(error)
    }
}

export function scheduleCronJob() {
    // updateDBFixtures();
    cron.schedule('0 */2 * * *', async () => {
        try {
            console.log('Cron updating fixtures...');
            await updateDBFixtures();
            console.log('Fixtures updated successfully.');
        } catch (error) {
            console.log("Error updating fixtures:", error);
        }
    });
}




