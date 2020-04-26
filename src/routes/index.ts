import express from 'express';
import HelloWorldRoute from './helloworld'

const ROUTES = [
  HelloWorldRoute
]

const loadRoutes = (app: express.Application) => {
  ROUTES.forEach(route => route(app));
}

export default loadRoutes;