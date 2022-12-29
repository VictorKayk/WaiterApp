import mongoose from 'mongoose';
import express from 'express';

async function start() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://localhost:27017');

    const app = express();
    app.listen(5000, () => console.log('Running at http://localhost:5000'));
  } catch (e) {
    console.log(e);
  }
}

start();
