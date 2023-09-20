import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { item } from './routes/items-route'

const app = new Hono()

app.route('/items', item)

serve(app, (address) => {
  console.log(`Server running on http://localhost:${address.port}`)
})
