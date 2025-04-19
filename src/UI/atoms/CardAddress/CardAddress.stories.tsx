import type { Meta, StoryObj } from '@storybook/react'

import { CardAddress } from './CardAddress'
import './CardAddress.module.css'

// Import styles

const meta: Meta<typeof CardAddress> = {
  title: 'Components/CardAddress',
  component: CardAddress,
  tags: ['autodocs'],
  argTypes: {
    address: {
      control: 'text',
      description: 'The address text to display',
    },
  },
}

export default meta

type Story = StoryObj<typeof CardAddress>

export const Default: Story = {
  args: {
    address: 'آدرس کوتاه',
  },
}

export const LongAddress: Story = {
  args: {
    address:
      'این یک متن تست برای یک آدرس طولانی است. برای اینکه از خط محدوده عبور نکند و ui به مشکل نخورد',
  },
}

export const Empty: Story = {
  args: {
    address: '',
  },
}
