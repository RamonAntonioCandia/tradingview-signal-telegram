import { Telegraf } from 'telegraf';
import { config } from '../config/config';
import { logger } from '../utils/logger';

const bot = new Telegraf(config.telegramBotToken);

export const sendTelegramMessage = async (message: string) => {
  try {
    const chatId = config.telegramChatId;
    await bot.telegram.sendMessage(chatId, message);
    logger.info(`Message sent to Telegram chat ID ${chatId}: ${message}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error(`Error sending message to Telegram: ${errorMessage}`);
    throw new Error(`Error sending message to Telegram: ${errorMessage}`);
  }
};

export const startBotService = async () => {
  bot.on('message', (ctx) => {
    logger.info(`Received message in chat ID ${ctx.message.chat.id}`);
    ctx.reply('Got it!');
  });

  bot.launch();
  logger.info('Telegram bot service started');
};
