import express from 'express';
import { json } from 'body-parser';
import { handleTradingViewSignal } from './services/tradingviewService';
import { connectToDatabase } from './services/databaseService';
import { startBotService, sendTelegramMessage } from './services/telegramService';
import { getSignals } from './services/databaseService';
import { config } from './config/config';

const app = express();
app.use(json());

app.post('/webhook', handleTradingViewSignal);
app.get("/signals", getSignals);

app.get('/test-telegram', async (req, res) => {
  try {
    await sendTelegramMessage('This is a test message from your bot!');
    res.status(200).send('Test message sent to Telegram');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).send(`Failed to send test message: ${errorMessage}`);
  }
});

const startServer = async () => {
  // await connectToDatabase();
  await startBotService();
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
};

startServer();
