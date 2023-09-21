import { AddItemForm } from '@/components/AddItemForm'
import { ItemsList } from '@/components/ItemsList'

export default function Home() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold">Lista de compras</h1>
      <AddItemForm />
      <ItemsList />
    </div>
  )
}
