import express, { Express } from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import routes from '../routes';
require('../strategies/discord');

export function createApp(): Express {
  const app = express();
  // Enable Parsing Middleware for Requests
  app.use(express.json());
  app.use(express.urlencoded());

  // Enable CORS
  app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
  app.use(
    session({
      secret: 'ADASCZXVZOPXSADASDMXZLQPZCXKMZCA',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 * 60 * 24 * 7 },
    })
  );

  // Enable Passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);

  return app;
}
