require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const express = require('express');
const app = express();

const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

bot.start((ctx) => {
    const username = ctx.from.first_name;
    ctx.reply(
        `স্বাগতম ${username}!\n"টাকার বাজার" বটের ড্যাশবোর্ড ওপেন করতে নিচের বাটনে ক্লিক করুন।`,
        Markup.keyboard([
            [Markup.button.webApp('🏪 ওপেন বাজার', 'https://your-web-app-url.com')] 
        ]).resize()
    );
});

bot.launch().then(() => {
    console.log('টাকার বাজার বট চালু হয়েছে...');
});

app.listen(PORT, () => {
    console.log(`সার্ভার চলছে পোর্ট: ${PORT}`);
});

