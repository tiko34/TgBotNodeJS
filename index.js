const { Telegraf } = require('telegraf');
const axios = require('axios');
const cheerio = require('cheerio');
const SiteChapters = require('./src/SiteChapters.js');
const BotToken = require('./src/BotToken.js');
const ParseHTML = require('./src/ParseHTML.js');

//Токен бота
const bot = new Telegraf(BotToken.GetBotToken());
//Отправка объектов при первом запуске бота
bot.start((ctx) => {ctx.reply('Привет!');});

bot.hears('a', async function (ctx) {

    ctx.reply(await GetScheduleGroup());
   
});

//Получение всех разделов расписания 
async function GetScheduleGroup()
{
    try {
        console.log('Функция GetScheduleGroup');
        console.log('--------------------------');
        selector = '#cb-content > section > div > div > div > div > a'
        url = await SiteChapters.GetHtmlSchedule()
        html = await ParseHTML.GetHtml(url)
        ParsRes = await ParseHTML.Parscheerio(html, selector)
        console.log('--------------------------');
        return ParsRes
    } catch (e) {
        return ax = 'Ошибка обработки';
    }
}






////Отработка исключения запуска бота
try {
    bot.launch()
    console.log('-------Тихонков М.Д-------');
    console.log('--------------------------');
    console.log('Бот успешно запущен')
    console.log('--------------------------');
}
catch (e)
{
    console.log('-------Тихонков М.Д-------')
    console.log('--------------------------')
    console.log('Ошибка запуска бота')
    console.log('--------------------------')
}




