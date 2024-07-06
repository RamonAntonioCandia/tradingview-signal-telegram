import express from 'express';
import { json } from 'body-parser';
import { handleTradingViewSignal } from './services/tradingviewService';
import { connectToDatabase } from './services/databaseService';
import { startBotService } from './services/telegramService';
import { getSignals } from './services/databaseService';

const app = express();
app.use(json());

app.post('/webhook', handleTradingViewSignal);
app.get("/signals", getSignals)

const startServer = async () => {
  await connectToDatabase();
  await startBotService()
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

startServer();
