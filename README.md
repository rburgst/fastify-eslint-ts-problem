# Sample repo for fastify lint problem

Shows a linting problem with `reply.header()` which appears to be async even though it is not.

1. `npm install`
2. `npm test` -> all ok
3. `npm run lint` -> shows
    ```
      11:5  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
      ```
4. "fix" the lint error by changing `server.ts` to 
    ```typescript
    server.addHook('onSend', async (request, reply, payload) => {
        await reply.header('x-foo', 'bar')
        return payload
    })
    ```
    i.e. add `await` to `reply.header(...)

5. run `npm run test` -> now the test hangs and times out after 5s

