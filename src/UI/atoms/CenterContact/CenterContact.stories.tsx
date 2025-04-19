import type { Meta, StoryObj } from '@storybook/react'

import { CenterContact } from './CenterContact'
import './CenterContact.module.css'

const meta: Meta<typeof CenterContact> = {
  title: 'Components/CenterContact',
  component: CenterContact,
  argTypes: {
    phone: { control: 'text' },
    website: { control: 'text' },
    instagram: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof CenterContact>

export const WithPhone = {
  args: { phone: '09199784100' },
}

export const WithWebsite = {
  args: { website: 'https://google.com' },
}

export const WithInstagram = {
  args: { instagram: 'https://instagram.com/' },
}

export const Complete = {
  args: {
    phone: '09199784100',
    website: 'https://google.com',
    instagram: 'https://instagram.com/',
  },
}

export const Empty = {
  args: {},
}
