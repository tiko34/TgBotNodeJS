
const { Telegraf, Extra, Stage, session } = require('telegraf');

const axios = require('axios');
const cheerio = require('cheerio');
const SiteChapters = require('./src/SiteChapters.js');
const BotToken = require('./src/BotToken.js');
const ParseHTML = require('./src/ParseHTML.js');
const { StartScene } = require('./src/scenes/StartScene');
//Токен бота
const bot = new Telegraf(BotToken.GetBotToken());

//Стартовая сцена

bot.use(StartScene.middleware());






//Отправка объектов при первом запуске бот










bot.hears('a', async function (ctx) {
    await ctx.scene.enter('StartScene')
    await next()
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




