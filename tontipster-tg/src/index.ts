import TelegramBot from 'node-telegram-bot-api';
import { readFileSync } from 'fs';
import express from 'express'
import { isDbConnected } from './services/prisma';
import { scheduleCronJob } from './services/football';
import router from './controllers';
require('dotenv').config();

const app = express();
const bot = new TelegramBot(process.env.TG_BOT_TOKEN!, { polling: true });
const PORT = process.env.PORT || 4000;

scheduleCronJob();
app.use(express.json());

app.use("/",router)

bot.onText(/\/start/, (msg: any, match: any) => {
    const logo = readFileSync(__dirname + '/assets/tontipster-logo.png')
    bot.sendPhoto(msg.chat.id, logo, {
        caption: 'Live Sports and betting utilizing Cutting-Edge TON Network',
        reply_markup: {
            inline_keyboard: [[
                { text: "Let's go", web_app: { url: "https://tontipster.online/" } },
                { text: "Join community", url: "https://t.me/tontipster" }
            ]]
        }
    })
});

bot.on('error', (error: any) => {
    console.log(error);
});

bot.on("polling_error", (error: any) => {
    console.log(error);
});


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Telegram bot is running`);
    if(await isDbConnected()){
        console.log(`Database is connected`)
    }else{
        console.log(`Database connection failed`)
        process.exit(1)
    }
});

