import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface IText {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export const Text = ({ size = 'md', children, asChild }: IText) => {
  const Typography = asChild ? Slot : 'span'
  return (
    <Typography
      className={clsx('text-gray-100', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Typography>
  )
}
