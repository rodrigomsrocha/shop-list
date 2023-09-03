'use client'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

interface SelectItemProps {
  value: string
  text: string
}

export function SelectUnity() {
  return (
    <Select.Root>
      <Select.Trigger className="group flex min-w-[4.5rem] items-center justify-between rounded-r-md border border-base-gray-300 bg-base-gray-400 p-3 text-[0.625rem] outline-none data-[state=open]:border-product-purple-light">
        <Select.Value placeholder="UN." />
        <Select.Icon className="transition-transform group-data-[state=open]:rotate-180 group-data-[state=open]:text-product-purple-light">
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={4}
          className="min-w-[4.5rem] overflow-hidden rounded-md border border-base-gray-300 bg-base-gray-500 text-sm"
        >
          <Select.Viewport>
            <SelectItem value="un" text="UN." />
            <SelectItem value="l" text="L" />
            <SelectItem value="kg" text="KG" />
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

function SelectItem({ value, text }: SelectItemProps) {
  return (
    <Select.Item
      className="flex cursor-pointer items-center justify-between border-b border-base-gray-300 p-3 outline-none last:border-none data-[state=checked]:bg-base-gray-300"
      value={value}
    >
      <Select.ItemText>{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="text-product-purple-light" size={12} />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
