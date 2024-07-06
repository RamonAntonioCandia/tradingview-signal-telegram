import { Schema, model, Document } from 'mongoose';

interface SignalDocument extends Document {
  symbol: string;
  action: string;
  timestamp: Date;
}

const signalSchema = new Schema<SignalDocument>({
  symbol: { type: String, required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Signal = model<SignalDocument>('Signal', signalSchema);
