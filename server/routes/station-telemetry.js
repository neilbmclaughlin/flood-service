const joi = require('@hapi/joi')
const boom = require('@hapi/boom')
const floodsService = require('../services/index')

module.exports = {
  method: 'GET',
  path: '/station/{rloiId}/{direction}/telemetry',
  handler: async (request, h) => {
    try {
      const { rloiId, direction } = request.params
      const result = await floodsService.getStationTelemetry(rloiId, direction)
      return result
    } catch (err) {
      return boom.badRequest('Failed to get telemetry data', err)
    }
  },
  options: {
    description: 'Get telemetry by station id',
    validate: {
      params: joi.object({
        rloiId: joi.number().required(),
        direction: joi.string().valid('u', 'd')
      })
    }
  }
}