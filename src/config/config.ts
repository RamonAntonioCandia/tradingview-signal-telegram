import dotenv from 'dotenv';

dotenv.config();

const getConfig = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const config = {
  port: process.env.PORT || 8080,
  mongoURI: getConfig('MONGODB_URI'),
  telegramBotToken: getConfig('TELEGRAM_BOT_TOKEN'),
  telegramChatId: getConfig('TELEGRAM_CHAT_ID'),
  tradingviewWebhookSecret: getConfig('TRADINGVIEW_WEBHOOK_SECRET')
};
