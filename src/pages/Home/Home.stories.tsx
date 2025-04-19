import { CounselingCenter } from '@/types/CounselingCenter'
import type { Meta, StoryObj } from '@storybook/react'

import HomvePage from './Home'
import HomePage from './Home'
import './Home.module.css'

const generateMockCenters = (count: number): CounselingCenter[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${i}`,
    manager: {
      id: 'GH966666P',
      name: `${i}`,
      user_id: 'IR963U3P',
      avatar: [
        {
          id: 'F9643MP',
          file_name: 'P9666V9A_large.png',
          slug: 'storage/public/Files_1000/P9666V9A_large.png',
          mode: 'large',
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666V9A_large.png',
          type: 'image',
          mime: 'image/png',
          exec: 'png',
        },
        {
          id: 'F9643MC',
          file_name: 'P9666V9A_medium.png',
          slug: 'storage/public/Files_1000/P9666V9A_medium.png',
          mode: 'medium',
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666V9A_medium.png',
          type: 'image',
          mime: 'image/png',
          exec: 'png',
        },
        {
          id: 'F9643ME',
          file_name: 'P9666V9A_original.png',
          slug: 'storage/public/Files_1000/P9666V9A_original.png',
          mode: 'original',
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666V9A_original.png',
          type: 'image',
          mime: 'image/png',
          exec: 'png',
        },
        {
          id: 'F9643MZ',
          file_name: 'P9666V9A_small.png',
          slug: 'storage/public/Files_1000/P9666V9A_small.png',
          mode: 'small',
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666V9A_small.png',
          type: 'image',
          mime: 'image/png',
          exec: 'png',
        },
      ],
    },
    acceptation: null,
    status: 'active',
    type: 'counseling_center',
    detail: {
      title: 'مرکز خدمات روان‌شناسی و مشاوره طلیعه سلامت',
      description: null,
      address:
        'تهران؛ خیابان دولت؛ چهارراه اختاریه به سمت شمال؛ کوچه نگار؛ ساختمان نگار؛ واحد ۱۲؛ طبقه سوم',
      avatar: [
        {
          id: 'F96DKWB',
          file_name: 'P9666AGP_large.png',
          slug: 'storage/public/Files_1000/P9666AGP_large.png',
          mode: 'large',
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666AGP_large.png',
          type: 'image',
          mime: 'image/png',
          exec: 'png',
        },
        {
          id: 'F96DKWK',
          file_name: 'P9666AGP_medium.png',
          slug: 'storage/public/Files_1000/P9666AGP_medium.png',
          mode: 'medium',
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666AGP_medium.png',
          type: 'image',
          mime: 'image/png',
          exec: 'png',
        },
        {
          id: 'F96DKW5',
          file_name: 'P9666AGP_original.png',
          slug: 'storage/public/Files_1000/P9666AGP_original.png',
          mode: 'original',
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666AGP_original.png',
          type: 'image',
          mime: 'image/png',
          exec: 'png',
        },
        {
          id: 'F96DKWE',
          file_name: 'P9666AGP_small.png',
          slug: 'storage/public/Files_1000/P9666AGP_small.png',
          mode: 'small',
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666AGP_small.png',
          type: 'image',
          mime: 'image/png',
          exec: 'png',
        },
      ],
      phone_numbers: [
        '02122572274',
        'http://www.taliehsalamat.org/',
        'https://www.instagram.com/t.salaamat/',
      ],
    },
    created_at: 1611072165,
  }))
}

const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: {
        type: 'object',
      },
      description: 'Initial array of counseling centers',
    },
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
}

export default meta

const mockFetchMoreCenters = async (page: number) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return generateMockCenters(5)
}

type Story = StoryObj<typeof HomePage>

const baseArgs = {
  data: generateMockCenters(10),
}

export const WithSelectedItem: Story = {
  args: baseArgs,
  decorators: [
    StoryFn => {
      setTimeout(() => {
        const selectedItem = baseArgs.data[0]
        const element = document.querySelector(`[data-id="${selectedItem.id}"]`)
        element?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      }, 500)
      return <StoryFn />
    },
  ],
}

export const EmptyState: Story = {
  args: {
    data: [],
  },
}
