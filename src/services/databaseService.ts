import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { config } from '../config/config';
// import { Signal } from '../models/Signal';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export const getSignals = async (req: Request, res: Response) => {
  // const signals = await Signal.find({}, { action: 1, symbol: 1 });
  // res.json(signals);
  res.json([]);
};
