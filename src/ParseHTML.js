const axios = require('axios');
const cheerio = require('cheerio');





//Проверка доступа к странице
async function CheckConnect(url) {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            //'Страница доступна.'
            return 1;
        } else {
            //'Страница недоступна.'
            return 0;
        }
    } catch (error) {
        console.log('Произошла ошибка при проверке доступности страницы.');
    }

} 
//Выгрузка HTML из сети
async function GetHtml(url) {
    try {
        if (check = await CheckConnect(url) == 1) {
            console.log('Функция GetHtml');
            console.log('--------------------------');
            console.log('Сайт доступен');
            console.log('Выгрузка HTML из интернета');
            const ax = await axios.get(url);
            console.log('HTML загружен');
            console.log('--------------------------');
            return ax;
        }
        else {
            console.log('Сайт не доступен');
        }
    } catch (e) {
        return ax = 'Ошибка выгрузки HTML';
    }
}
//Парсинг HTML по селектору
async function Parscheerio(html, selector) {
    try {
        console.log('Функция Parscheerio');
        console.log('--------------------------');
        console.log('Загрузка HTML для парсинга');
        const htmldoc = html.data;
        console.log('HTML загружен');
        const $ = cheerio.load(htmldoc);
        console.log('Парсинг HTML по селектору');
        const $divItems = $(selector);
        console.log('Парсинг HTML окончен');
        console.log('--------------------------');
        return $divItems.text();
    }
    catch (e) {
        return ax = 'Ошибка парсинга';
    }
}

module.exports = { GetHtml, Parscheerio }; 