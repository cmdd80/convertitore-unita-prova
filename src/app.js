import express from 'express';
import { convert } from './conversions.js';

export const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/convert', (req, res) => {
  const value = Number(req.query.value);
  const { from, to } = req.query;

  if (!Number.isFinite(value)) {
    return res.status(400).json({ error: 'Il parametro value deve essere un numero' });
  }

  try {
    res.json(convert(value, from, to));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});