import { Plus } from 'lucide-react'
import { SelectUnity } from './SelectUnity'
import { SelectCategory } from './SelectCategory'

export function AddItemForm() {
  return (
    <form className="flex flex-wrap gap-3">
      <div className="flex flex-1 flex-col gap-2 text-base-gray-200">
        <label className="text-xs" htmlFor="item">
          Item
        </label>
        <input
          className="rounded-md border border-base-gray-300 bg-base-gray-500 p-3 text-sm leading-4 outline-none focus-within:z-10 focus-within:border-product-purple-light"
          type="text"
          name="item"
          id="item"
        />
      </div>
      <div className="flex flex-1 gap-2">
        <div className="flex flex-col gap-2 text-base-gray-200">
          <label className="text-xs" htmlFor="quantity">
            Quantidade
          </label>
          <div className="flex flex-1">
            <input
              className="-mr-px w-[5rem] rounded-l-md border border-base-gray-300 bg-base-gray-500 p-3 text-sm leading-4 outline-none focus-within:z-10 focus-within:border-product-purple-light"
              type="number"
              name="quantity"
              id="quantity"
            />
            <SelectUnity />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 text-base-gray-200">
          <label className="text-xs" htmlFor="category">
            Categoria
          </label>
          <SelectCategory />
        </div>
        <button
          className="flex aspect-square h-10 w-10 items-center justify-center self-end rounded-full bg-product-purple transition-colors hover:bg-product-purple-dark"
          type="submit"
        >
          <Plus />
        </button>
      </div>
    </form>
  )
}
