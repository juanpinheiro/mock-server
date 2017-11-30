'use strict'

const lodash = require('lodash')
const pause = require('../helper/pause')

module.exports = ({repo}, app) => {
  app.post('/mock/save/', (req, res, next) => {
    const {validate} = req.container.cradle
    const restartService = req.container.resolve('restartService')

    validate(req.body, 'mock', res)
    .then(data => {
      repo.saveMock(req.body)
      .then((mock) => {
        res.status(200).json(mock)
        restartService()
      }).catch((mock) => {
        res.status(422).json(mock)
      })
    })
    .catch(next)
  })

  app.get('/mock/:id', (req, res, next) => {
    repo.getMockById(req.params.id).then(mocks => {
      res.status(200).json(mocks)
    }).catch(next)
  })

  app.get('/mock/delete/:id', (req, res, next) => {
    repo.deleteMockById(req.params.id).then(mocks => {
      res.status(200).json({ 'msg': `Mock id:${req.params.id} succesfully deleted` })
    }).catch(next)
  })

  app.get('/mocks', (req, res, next) => {
    repo.getAllMocks().then(mocks => {
      res.status(200).json(mocks)
    }).catch(next)
  })

  repo.getAllEndpoints().then(mocks => {
    lodash.forEach(mocks, (api, key) => {
      let selected = lodash.get(api.responses, api.use)

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
  })
}
