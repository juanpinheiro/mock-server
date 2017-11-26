const mockSchema = (joi) => joi.object().keys({
  method: joi.string().alphanum().regex(/^(GET|SET|PUT|DELETE)$/).required().options({
    language: {
      string: {
        regex: {
          base: 'Only methods GET, SET, PUT and DELETE are allowed'
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
  200: joi.object().keys({
    data: joi.required()
  })
})

module.exports = mockSchema
