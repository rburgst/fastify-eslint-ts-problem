import fastify, { FastifyInstance } from 'fastify'

export interface MyPluginOptions {
  myPluginOption: string
}

export async function createServer(): Promise<FastifyInstance> {
  const server = fastify()

  server.addHook('onSend', async (request, reply, payload) => {
    reply.header('x-foo', 'bar')
    return payload
  })

  server.get('/ping', async (request, reply) => {
    return 'pong\n'
  })

  return await server
}
