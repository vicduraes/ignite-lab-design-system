import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { TextInput, ITextInputRoot } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Type your info here' />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ITextInputRoot>

export const Default: StoryObj<ITextInputRoot> = {}

export const WithoutIcon: StoryObj<ITextInputRoot> = {
  args: {
    children: <TextInput.Input placeholder='Type your info here' />,
  },
}
