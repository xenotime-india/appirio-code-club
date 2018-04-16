
//jsForce connection
import session from 'express-session';
import bodyParser from 'body-parser';
import config from 'config';
import helmet from 'helmet';
import cors from 'cors';
import nocache from "nocache";
import mongoose from 'mongoose';

import handler from "./services/github";

export default (app) => {
  mongoose.connect(config.MONGO_URI);

  mongoose.connection.on('error', err => {
    console.error(`Error while connecting to DB: ${err.message}`);
  });
  mongoose.connection.once('open', () => {
    console.log('DB connected successfully!');
  });

    app.use(nocache());
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    /*
    app.use(session({
        secret: config.sessionSecretKey,
        cookie: { secure: config.isHttps === 'true' },
        resave: false,
        saveUninitialized: false
    }));
    */


    app.use('/api/githook', handler());
    /*
    app.get('/auth/callback', callback);
    app.get('/auth/whoami', whoami);
    app.get('/auth/signature', signature);
    app.get('/auth/logout', logout);
    */

    return app;
};