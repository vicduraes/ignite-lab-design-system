import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextInputRoot {
  children: ReactNode
}

export interface ITextInputIcon {
  children: ReactNode
}

const TextInputRoot = ({ children }: ITextInputRoot) => {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

const TextInputIcon = ({ children }: ITextInputIcon) => {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>
}

const TextInputInput = (props: ITextInput) => {
  return (
    <input
      className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
