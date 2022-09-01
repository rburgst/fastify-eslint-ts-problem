import { createServer } from './server'

async function start(): Promise<void> {
  const fastify = await createServer()
  fastify.listen({ port: 8080 }, (err, address) => {
    if (err != null) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
}

start().catch((e) => console.error('error starting fastify', e))
