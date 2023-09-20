import { Hono } from 'hono'
import { prisma } from '../lib/prisma'

export const item = new Hono()

item.get('/', async (c) => {
  const items = await prisma.item.findMany()
  return c.json(items)
})
