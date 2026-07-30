import { createServer } from '../server.js'
import { statusCodes } from '../common/constants/status-codes.js'

describe('#mapController', () => {
  let server

  beforeAll(async () => {
    server = await createServer()
    await server.initialize()
  })

  afterAll(async () => {
    await server.stop({ timeout: 0 })
  })

  test('Should provide expected response for /map', async () => {
    const { result, statusCode } = await server.inject({
      method: 'GET',
      url: '/map'
    })

    expect(result).toEqual(expect.stringContaining('Map |'))
    expect(statusCode).toBe(statusCodes.ok)
  })

  test('Should include Azure Maps SDK on /map', async () => {
    const { result } = await server.inject({
      method: 'GET',
      url: '/map'
    })

    expect(result).toEqual(expect.stringContaining('atlas.min.js'))
  })
})
