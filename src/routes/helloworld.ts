import express from 'express';

import { HelloWorld } from '../controllers/helloworld';

export default (app: express.Application) => {
  app.get('/', async (req, res) => {
    const name = 'hello';
    const { text, error }= await HelloWorld({ name });
    if (error) {
      return res.status(500).send(error)
    }
    res.send(text);
  })
}