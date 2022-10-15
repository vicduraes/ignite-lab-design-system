import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface IHeading {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export const Heading = ({ size = 'md', children, asChild }: IHeading) => {
  const Typography = asChild ? Slot : 'h2'
  return (
    <Typography
      className={clsx('text-gray-100 font-bold', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
    >
      {children}
    </Typography>
  )
}
