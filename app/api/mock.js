'use strict'

const lodash   = require('lodash');
const status   = require('http-status');
const mocks    = require('../mock/mock.js');

module.exports = (app, options) => {

  app.use((req, res, next) => {
    setTimeout(() => next(), 300);
  });

  lodash.forEach(mocks, function (api, key) {

    let selected = lodash.get(api, api.use);

    app.get(api.route, function(req, res) {
      res.status(api.use).send(selected.data);
    });
  });

};
