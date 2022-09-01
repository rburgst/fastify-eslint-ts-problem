import { FastifyInstance } from 'fastify'
import { createServer } from './server'

describe('test', () => {
  let server: FastifyInstance

  beforeEach(async () => {
    server = await createServer()
  })

  afterEach(async () => {
    await server.close()
  })

  it('should respond ok', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/ping',
      query: {
        param: 'foo'
      }
    })
    expect(response.statusCode).toEqual(200)
    expect(response.headers).toMatchObject({
      'x-foo': 'bar'
    })
  })
})
