const joi = require('joi')
const mock = require('./mock.model')(joi)

const schemas = Object.create({mock})

const buildErrorMessage = (error) => {
  const vec = []
  error.details.forEach((e) => {
    vec.push({
      'path': e.path[0],
      'msg': e.message.replace(/"/g, '')
    })
  })
  return vec
}

const schemaValidator = (object, type, res) => {
  return new Promise((resolve, reject) => {
    if (!object) {
      reject(new Error('object to validate not provided'))
    }
    if (!type) {
      reject(new Error('schema type to validate not provided'))
    }
    const {error, value} = joi.validate(object, schemas[type], {
      abortEarly: false
    })

    if (error) {
      res.status(422).json(buildErrorMessage(error))
      reject()
    }
    resolve(value)
  })
}

module.exports = Object.create({validate: schemaValidator, schemas})
