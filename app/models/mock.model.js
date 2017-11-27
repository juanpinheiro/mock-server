'use strict'

const mockSchema = (joi) => joi.object().keys({
  method: joi.string().alphanum().regex(/^(GET|SET|PUT|DELETE)$/).required().options({
    language: {
      string: {
        regex: {
          base: 'allow only GET, SET, PUT and DELETE are allowed'
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
  responses: {
    200: {
      data: joi.any().required()
    }
  }
}).requiredKeys('responses', 'responses.200.data')

module.exports = mockSchema
