const express = require('express');
const morgan  = require('morgan');
const helmet  = require('helmet');
const api     = require('../api/mock');

const start = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.port) {
      reject(new Error('The server must be started with an available port'));
    }

    const app = express();

    app.use(morgan('dev'));
    app.use(helmet());
    app.use((err, req, res, next) => {
      reject(new Error('Something went wrong!, err:' + err));
      res.status(500).send('Something went wrong!');
    });

    api(app, options);

    const server = app.listen(options.port, () => resolve(server));

    console.log(`Server started succesfully, running on port: ${options.port}.`);

  });
};

module.exports = Object.assign({}, {start});
