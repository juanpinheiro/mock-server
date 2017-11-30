'use strict'

const mockSchema = (joi) => joi.object().keys({
  method: joi.string().alphanum().regex(/^(GET|POST|PUT|DELETE)$/).required().options({
    language: {
      string: {
        regex: {
          base: 'allow only GET, POST, PUT and DELETE are allowed'
        }
      }
    }
  }),
  route: joi.string().regex(/^\//).required().options({
    language: {
      string: {
        regex: {
          base: 'Route always start with a slash. Example: /my/route/:id'
        }
      }
    }
  }),
  use: joi.number().required(),
  timeout: joi.number().required(),
  responses: joi.array().items(joi.object().keys({
    code: joi.number().required(),
    data: joi.any().required()
  }))
})

module.exports = mockSchema
