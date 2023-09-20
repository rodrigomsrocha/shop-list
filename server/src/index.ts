import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Hono!'))

serve(app, (address) => {
  console.log(`Server running on http://localhost:${address.port}`)
})
