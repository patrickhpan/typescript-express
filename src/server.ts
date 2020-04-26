import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import loadRoutes from './routes';

const app = express();

loadRoutes(app)

const { PORT = 8080 } = process.env;
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
})