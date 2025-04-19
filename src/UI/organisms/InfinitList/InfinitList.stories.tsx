import type { Meta, StoryObj } from '@storybook/react';
import { InfinitList } from './InfinitList';
import { CounselingCenter } from '@/types/CounselingCenter';
import { fn } from '@storybook/test';
import { FA_LOADING, FA_NO_MORE_CONTENT } from '@/constants/messages';
import './InfinitList.module.css';

const meta: Meta<typeof InfinitList> = {
  title: 'Components/InfinitList',
  component: InfinitList,
  tags: ['autodocs'],
  argTypes: {
    initialData: {
      control: {
        type: 'object',
      },
    },
    selectCenterItem: {
      action: 'itemSelected',
    },
    fetchMoreData: {
      action: 'fetchMore',
    },
    hasMore: {
      control: 'boolean',
    },
    loadingComponent: {
      control: {
        type: 'text',
      },
    },
    endMessageComponent: {
      control: {
        type: 'text',
      },
    },
    scrollThreshold: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    rootMargin: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    activeItem: {
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InfinitList>;

// Generate mock data
const generateMockData = (count: number): CounselingCenter[] => {
  return Array.from({ length: count }, (_, i) => (
    {
        "id": `${i}`,
        "manager": {
            "id": "GH966666P",
            "name": `${i}`,
            "user_id": "IR963U3P",
            "avatar": [
                {
                    "id": "F9643MP",
                    "file_name": "P9666V9A_large.png",
                    "slug": "storage/public/Files_1000/P9666V9A_large.png",
                    "mode": "large",
                    "url": "https://api.risloo.ir/storage/public/Files_1000/P9666V9A_large.png",
                    "type": "image",
                    "mime": "image/png",
                    "exec": "png"
                },
                {
                    "id": "F9643MC",
                    "file_name": "P9666V9A_medium.png",
                    "slug": "storage/public/Files_1000/P9666V9A_medium.png",
                    "mode": "medium",
                    "url": "https://api.risloo.ir/storage/public/Files_1000/P9666V9A_medium.png",
                    "type": "image",
                    "mime": "image/png",
                    "exec": "png"
                },
                {
                    "id": "F9643ME",
                    "file_name": "P9666V9A_original.png",
                    "slug": "storage/public/Files_1000/P9666V9A_original.png",
                    "mode": "original",
                    "url": "https://api.risloo.ir/storage/public/Files_1000/P9666V9A_original.png",
                    "type": "image",
                    "mime": "image/png",
                    "exec": "png"
                },
                {
                    "id": "F9643MZ",
                    "file_name": "P9666V9A_small.png",
                    "slug": "storage/public/Files_1000/P9666V9A_small.png",
                    "mode": "small",
                    "url": "https://api.risloo.ir/storage/public/Files_1000/P9666V9A_small.png",
                    "type": "image",
                    "mime": "image/png",
                    "exec": "png"
                }
            ]
        },
        "acceptation": null,
        "status": "active",
        "type": "counseling_center",
        "detail": {
            "title": "مرکز خدمات روان‌شناسی و مشاوره طلیعه سلامت",
            "description": null,
            "address": "تهران؛ خیابان دولت؛ چهارراه اختاریه به سمت شمال؛ کوچه نگار؛ ساختمان نگار؛ واحد ۱۲؛ طبقه سوم",
            "avatar": [
                {
                    "id": "F96DKWB",
                    "file_name": "P9666AGP_large.png",
                    "slug": "storage/public/Files_1000/P9666AGP_large.png",
                    "mode": "large",
                    "url": "https://api.risloo.ir/storage/public/Files_1000/P9666AGP_large.png",
                    "type": "image",
                    "mime": "image/png",
                    "exec": "png"
                },
                {
                    "id": "F96DKWK",
                    "file_name": "P9666AGP_medium.png",
                    "slug": "storage/public/Files_1000/P9666AGP_medium.png",
                    "mode": "medium",
                    "url": "https://api.risloo.ir/storage/public/Files_1000/P9666AGP_medium.png",
                    "type": "image",
                    "mime": "image/png",
                    "exec": "png"
                },
                {
                    "id": "F96DKW5",
                    "file_name": "P9666AGP_original.png",
                    "slug": "storage/public/Files_1000/P9666AGP_original.png",
                    "mode": "original",
                    "url": "https://api.risloo.ir/storage/public/Files_1000/P9666AGP_original.png",
                    "type": "image",
                    "mime": "image/png",
                    "exec": "png"
                },
                {
                    "id": "F96DKWE",
                    "file_name": "P9666AGP_small.png",
                    "slug": "storage/public/Files_1000/P9666AGP_small.png",
                    "mode": "small",
                    "url": "https://api.risloo.ir/storage/public/Files_1000/P9666AGP_small.png",
                    "type": "image",
                    "mime": "image/png",
                    "exec": "png"
                }
            ],
            "phone_numbers": [
                "02122572274",
                "http://www.taliehsalamat.org/",
                "https://www.instagram.com/t.salaamat/"
            ]
        },
        "created_at": 1611072165
    }
  ));
};

// Mock fetch function with delay
const mockFetchMore = async (count: number = 5, delay: number = 1000) => {
  await new Promise(resolve => setTimeout(resolve, delay));
  return generateMockData(count);
};

// Base args
const baseArgs = {
  initialData: generateMockData(5),
  selectCenterItem: fn(),
  hasMore: true,
  activeItem: null,
};

export const Default: Story = {
  args: {
    ...baseArgs,
    fetchMoreData: async () => mockFetchMore(5, 1000),
  },
};

export const LoadingState: Story = {
  args: {
    ...baseArgs,
    fetchMoreData: async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return generateMockData(5);
    },
  },
};

export const NoMoreContent: Story = {
  args: {
    ...baseArgs,
    hasMore: false,
    fetchMoreData: async () => [],
  },
};

export const WithActiveItem: Story = {
  args: {
    ...baseArgs,
    activeItem: generateMockData(1)[0],
    fetchMoreData: async () => mockFetchMore(5, 500),
  },
};

export const LongList: Story = {
  args: {
    ...baseArgs,
    initialData: generateMockData(20),
    fetchMoreData: async () => mockFetchMore(10, 800),
  },
};

export const CustomMessages: Story = {
  args: {
    ...baseArgs,
    loadingComponent: <div style={{ color: 'blue' }}>در حال بارگذاری...</div>,
    endMessageComponent: <div style={{ color: 'red' }}>پایان محتوا</div>,
    fetchMoreData: async () => mockFetchMore(5, 1500),
  },
};
