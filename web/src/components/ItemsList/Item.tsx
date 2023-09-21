'use client'

import * as Checkbox from '@radix-ui/react-checkbox'
import { Apple, CheckIcon } from 'lucide-react'

export function Item() {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-base-gray-300 bg-base-gray-400 p-4">
      <Checkbox.Root className="flex h-4 w-4 items-center justify-center rounded border border-product-purple hover:bg-product-purple-dark data-[state=checked]:border-feedback-success data-[state=checked]:bg-feedback-success hover:data-[state=checked]:bg-feedback-success-light">
        <Checkbox.Indicator>
          <CheckIcon size={12} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div>
        <strong className="block">Maçã</strong>
        <span>2 Unidades</span>
      </div>
      <div className="ml-auto">
        <div className="flex items-center gap-[0.375rem] rounded-full bg-utils-orange-dark px-4 py-2 text-utils-orange">
          <Apple size={16} />
          fruta
        </div>
      </div>
    </div>
  )
}
