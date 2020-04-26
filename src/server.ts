import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import HelloWorldRoute from './routes/helloworld';

const app = express();

HelloWorldRoute(app)

const { PORT = 8080 } = process.env;
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
})