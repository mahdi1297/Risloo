import { Manager } from '@/types/Manager'
import type { Meta, StoryObj } from '@storybook/react'

import { ManagerField } from './ManagerFIeld'
import './ManagerField.module.css'

const meta: Meta<typeof ManagerField> = {
  title: 'Components/ManagerField',
  component: ManagerField,
  tags: ['autodocs'],
  argTypes: {
    manager: {
      control: {
        type: 'object',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ManagerField>

// Sample manager data
const sampleManager: Manager = {
  name: 'علی محمدی',
  id: '12419',
  user_id: '1024732948',
  avatar: null,
}

export const Default: Story = {
  args: {
    manager: sampleManager,
  },
}

export const LongName: Story = {
  args: {
    manager: {
      name: 'علی محمدی علی محمدی علی محمدی علی محمدی علی محمدی علی محمدی',
      id: '12419',
      user_id: '1024732948',
      avatar: null,
    },
  },
}

export const EnglishName: Story = {
  args: {
    manager: {
      name: 'مهدی علی پور',
      id: '12419',
      user_id: '1024732948',
      avatar: null,
    },
  },
}
