import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, ICheckbox } from './Checkbox'
import { Text } from '../Text/Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Aux text decorator here!</Text>
        </div>
      )
    },
  ],
} as Meta<ICheckbox>

export const Default: StoryObj<ICheckbox> = {}
