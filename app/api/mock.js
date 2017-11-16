'use strict'

const lodash = require('lodash')
const mocks = require('../mock/mock.js')

module.exports = (app, options) => {
  app.use((req, res, next) => {
    setTimeout(() => next(), 300)
  })

  lodash.forEach(mocks, (api, key) => {
    let selected = lodash.get(api, api.use)

    app.get(api.route, (req, res) => {
      res.status(api.use).send(selected.data)
    })
  })
}
