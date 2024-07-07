import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  mongoURI: process.env.MONGODB_URI,
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  telegramChatId: process.env.TELEGRAM_CHAT_ID, // Ensure this is added
  tradingviewWebhookSecret: process.env.TRADINGVIEW_WEBHOOK_SECRET
};
