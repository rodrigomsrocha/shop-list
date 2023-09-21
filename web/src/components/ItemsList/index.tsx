import { Item } from './Item'

export function ItemsList() {
  return (
    <div className="mt-10 flex flex-col gap-3">
      <Item />
      <Item />
      <Item />
    </div>
  )
}
