const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyparser = require('body-parser')
const cors = require('cors')
const apiMock = require('../api/mock')

const start = (container) => {
  return new Promise((resolve, reject) => {
    const {port} = container.resolve('serverSettings')
    const repo = container.resolve('repo')

    if (!repo) {
      reject(new Error('The server must be started with a connected repository'))
    }
    if (!port) {
      reject(new Error('The server must be started with an available port'))
    }

    const app = express()
    app.use(morgan('dev'))
    app.use(bodyparser.json())
    app.use(helmet())
    app.use(cors())
    app.use((err, req, res, next) => {
      reject(new Error('Something went wrong!, err:' + err))
      res.status(500).send({'msg': 'Something went wrong!'})
      next()
    })
    app.use((req, res, next) => {
      req.container = container.createScope()
      next()
    })

    const mock = apiMock.bind(null, {repo})
    mock(app)

    const server = app.listen(port, () => resolve(server))
  })
}

module.exports = Object.assign({}, {start})
