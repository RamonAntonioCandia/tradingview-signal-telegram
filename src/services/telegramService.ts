import { Telegraf } from 'telegraf';
import { config } from '../config/config';

const bot = new Telegraf(config.telegramBotToken);

export const sendTelegramMessage = async (message: string) => {
  await bot.telegram.sendMessage('7110998875', message);
};

export const startBotService = async () => {
  bot.on('message', (ctx) => {
    console.log("chat id", ctx.message.chat.id);
    ctx.reply('Got it!');
  });
  
  bot.launch();
}