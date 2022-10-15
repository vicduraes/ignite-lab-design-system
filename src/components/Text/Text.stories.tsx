import { Meta, StoryObj } from '@storybook/react'

import { Text, IText } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Loren ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IText>

//StoryObj -> configuração por variação do componente
//Meta -> configuração 'global' que serve para todas as variações
//args === props do componente

export const Default: StoryObj<IText> = {}

export const Small: StoryObj<IText> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<IText> = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj<IText> = {
  args: {
    asChild: true,
    children: <p>Text text with p HTML tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
