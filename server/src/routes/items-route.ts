import { Hono } from 'hono'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export const item = new Hono()

item.get('/', async (c) => {
  const items = await prisma.item.findMany()
  return c.json(items)
})

item.post('/', async (c) => {
  const bodySchema = z.object({
    name: z.string(),
    category: z.string(),
    quantity: z.number(),
    unity: z.string(),
  })

  const body = bodySchema.parse(await c.req.json())

  const item = await prisma.item.create({
    data: body,
  })

  return c.json(item)
})
