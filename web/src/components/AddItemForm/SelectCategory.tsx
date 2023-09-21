'use client'

import * as Select from '@radix-ui/react-select'
import {
  Apple,
  Beef,
  Carrot,
  Check,
  ChevronDown,
  LucideProps,
  Milk,
  Sandwich,
} from 'lucide-react'
import { ReactElement } from 'react'

interface SelectItemProps {
  icon: ReactElement<LucideProps>
  value: string
  text: string
}

export function SelectCategory() {
  return (
    <Select.Root>
      <Select.Trigger className="group flex min-w-[10.5rem] items-center justify-between rounded-md border border-base-gray-300 bg-base-gray-400 p-3 text-sm leading-4 outline-none data-[state=open]:border-product-purple-light">
        <Select.Value placeholder="Selecione" />
        <Select.Icon className="transition-transform data-[state=open]:rotate-180 data-[state=open]:text-product-purple-light">
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={4}
          className="min-w-[10.5rem] overflow-hidden rounded-md border border-base-gray-300 bg-base-gray-500 text-sm"
        >
          <Select.Viewport>
            <SelectItem
              icon={<Sandwich size={16} className="text-utils-yellow" />}
              value="padaria"
              text="Padaria"
            />
            <SelectItem
              icon={<Carrot size={16} className="text-utils-green" />}
              value="legume"
              text="Legume"
            />
            <SelectItem
              icon={<Beef size={16} className="text-utils-pink" />}
              value="carne"
              text="Carne"
            />
            <SelectItem
              icon={<Apple size={16} className="text-utils-orange" />}
              value="fruta"
              text="Fruta"
            />
            <SelectItem
              icon={<Milk size={16} className="text-utils-blue" />}
              value="bebida"
              text="Bebida"
            />
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

function SelectItem({ icon, value, text }: SelectItemProps) {
  return (
    <Select.Item
      className="flex cursor-pointer items-center justify-between border-b border-base-gray-300 p-3 outline-none last:border-none data-[state=checked]:bg-base-gray-300"
      value={value}
    >
      <div className="flex items-center gap-2">
        {icon}
        <Select.ItemText>{text}</Select.ItemText>
      </div>
      <Select.ItemIndicator>
        <Check className="text-product-purple-light" size={12} />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
