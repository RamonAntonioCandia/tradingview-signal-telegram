import { Request, Response } from 'express';
// import { Signal } from '../models/Signal';
import { config } from '../config/config';
import { sendTelegramMessage } from './telegramService';
import { logger } from '../utils/logger';

export const handleTradingViewSignal = async (req: Request, res: Response) => {
  const { symbol, action, timestamp, secret } = req.body;
  logger.info(`Received signal: symbol=${symbol}, action=${action}, timestamp=${timestamp}`);
  logger.info(`Received secret: ${secret}`);
  logger.info(`Expected secret: ${config.tradingviewWebhookSecret}`);
  
  // Verify TradingView Webhook Secret
  if (secret !== config.tradingviewWebhookSecret) {
    logger.warn('Unauthorized access attempt');
    return res.status(403).send('Forbidden');
  }

  try {
    // Save the signal to the database
    // const newSignal = new Signal({ symbol, action, timestamp });
    // await newSignal.save();
    logger.info('Signal saved to database');

    res.status(200).send('Signal received');

    // Send a message to Telegram
    let signalLight = '🟢';
    if(action === "sell") signalLight = '🔴';

    await sendTelegramMessage(`${signalLight}[${timestamp}] ${action} - ${symbol}`);
    logger.info('Signal sent to Telegram');
  } catch (error) {
    logger.error('Error processing signal', error);
    res.status(500).send('Internal Server Error');
  }
};
