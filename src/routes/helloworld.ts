import express from 'express';

import { HelloWorld } from '../controllers/helloworld';

export default (app: express.Application) => {
  app.get('/', (req, res) => {
    const response = HelloWorld({});
    res.send(response.text);
  })
}