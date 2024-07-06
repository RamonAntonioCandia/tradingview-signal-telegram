import dotenv from 'dotenv';

dotenv.config();

export const config = {
  mongodbUri: process.env.MONGODB_URI || '',
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '',
  tradingviewWebhookSecret: process.env.TRADINGVIEW_WEBHOOK_SECRET || '',
};