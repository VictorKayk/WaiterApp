import mongoose from 'mongoose';
import express from 'express';
import {router} from './routes';
import 'express-async-errors';
import {errorHandler} from './app/middlewares/errorHandler';
import path from 'node:path';
import http from 'node:http';
import {Server} from 'socket.io';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

async function start() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://localhost:27017');

    app.use((req, res, next) => {
      res.setHeader('access-control-allow-origin', '*')
        .setHeader('access-control-allow-methods', '*')
        .setHeader('access-control-allow-headers', '*')
        .setHeader('access-control-max-age', 20);
      next();
    });
    app.use(express.json());
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(router);
    app.use(errorHandler);

    server.listen(5000, () => console.log('Running at http://localhost:5000'));
  } catch (e) {
    console.log(e);
  }
}

start();
