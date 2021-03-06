import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';

import loadRoutes from './routes';
import { getDB } from './db';

(async () => {
  const app = express();
  await getDB();
  
  app.use(bodyParser.json());

  loadRoutes(app)

  const { PORT = 8080 } = process.env;
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
  })
})();
