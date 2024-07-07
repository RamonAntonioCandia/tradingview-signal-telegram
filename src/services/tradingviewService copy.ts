import { Request, Response } from 'express';
import { Signal } from '../models/Signal';
import { config } from '../config/config';
import { sendTelegramMessage } from './telegramService';

export const handleTradingViewSignal = async (req: Request, res: Response) => {
  const { symbol, action, timestamp } = req.body;
  console.log(symbol, action)
  
  if (req.headers['tradingview-webhook-secret'] !== config.tradingviewWebhookSecret) {
    return res.status(403).send('Forbidden');
  }

  const signal = new Signal({ symbol, action });
  await signal.save();

  res.status(200).send('Signal received');

  let signalLight = '🟢'
  if(action === "sell") signalLight = '🔴'

  sendTelegramMessage(`${signalLight}[${timestamp}] ${action} - ${symbol}`)
};
