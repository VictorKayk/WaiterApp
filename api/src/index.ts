import mongoose from 'mongoose';
import express from 'express';
import {router} from './routes';
import 'express-async-errors';
import {errorHandler} from './app/middlewares/errorHandler';

async function start() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://localhost:27017');

    const app = express();

    app.use(express.json());
    app.use(router);
    app.use(errorHandler);

    app.listen(5000, () => console.log('Running at http://localhost:5000'));
  } catch (e) {
    console.log(e);
  }
}

start();
