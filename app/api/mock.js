'use strict'

const lodash = require('lodash')
const mocks = require('../mock/mock.js')
const pause = require('../helper/pause')

module.exports = (app, options) => {
  lodash.forEach(mocks, (api, key) => {
    let selected = lodash.get(api, api.use)

    console.log(`${api.method} ${api.route}`)

    let responseData = (req, res) => {
      pause(api.timeout).then(() => {
        res.status(api.use).send(selected.data)
      })
    }

    switch (api.method.toUpperCase()) {
      case 'GET':
        app.get(api.route, responseData)
        break
      case 'POST':
        app.post(api.route, responseData)
        break
      case 'PUT':
        app.put(api.route, responseData)
        break
      case 'DELETE':
        app.delete(api.route, responseData)
        break
      default:
        console.log(`Method ${api.method} is not allowed.`)
        break
    }
  })
}
