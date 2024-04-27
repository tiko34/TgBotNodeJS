const { Telegraf, Scene, session } = require('telegraf');

const StartScene = new Scene('start');

StartScene.enter((ctx) => ctx.reply('Welcome! Choose an option:', {
    reply_markup: {
        inline_keyboard: [
            [{ text: 'Help', callback_data: 'help' }]
        ]
    }
}));

module.exports = StartScene;