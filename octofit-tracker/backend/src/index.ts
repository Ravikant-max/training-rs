import express from 'express';
import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/octofit';
const PORT = Number(process.env.PORT || 8000);

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ status: 'OctoFit Tracker backend is running' });
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
      console.log(`Connected to MongoDB at ${MONGO_URL}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
