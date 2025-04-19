import type { Meta, StoryObj } from '@storybook/react';
import { CounselingCenter } from '@/types/CounselingCenter';
import './InfinitListItem.module.css';
import InfinitListItem from '../InfinitListItem/InfinitListItem';

const sampleItem: CounselingCenter = {
    "id": "RS96662EV",
    "manager": {
        "id": "GH96664AN",
        "name": "دکتر همتی",
        "user_id": "IR963XPP",
        "avatar": null
    },
    "acceptation": null,
    "status": "active",
    "type": "counseling_center",
    "detail": {
        "title": "مرکز مشاوره و خدمات روان‌شناسی روشنان",
        "description": null,
        "address": "قم، بلوار شهید صدوقی(زنبیل آباد)،بلوار فردوسی، بین کوچه ۱۴و۱۲",
        "avatar": [
            {
                "id": "F96DUMD",
                "file_name": "P9666FW9_large.png",
                "slug": "storage/public/Files_1000/P9666FW9_large.png",
                "mode": "large",
                "url": "https://api.risloo.ir/storage/public/Files_1000/P9666FW9_large.png",
                "type": "image",
                "mime": "image/png",
                "exec": "png"
            },
            {
                "id": "F96DUM3",
                "file_name": "P9666FW9_medium.png",
                "slug": "storage/public/Files_1000/P9666FW9_medium.png",
                "mode": "medium",
                "url": "https://api.risloo.ir/storage/public/Files_1000/P9666FW9_medium.png",
                "type": "image",
                "mime": "image/png",
                "exec": "png"
            },
            {
                "id": "F96DUM9",
                "file_name": "P9666FW9_original.png",
                "slug": "storage/public/Files_1000/P9666FW9_original.png",
                "mode": "original",
                "url": "https://api.risloo.ir/storage/public/Files_1000/P9666FW9_original.png",
                "type": "image",
                "mime": "image/png",
                "exec": "png"
            },
            {
                "id": "F96DUMT",
                "file_name": "P9666FW9_small.png",
                "slug": "storage/public/Files_1000/P9666FW9_small.png",
                "mode": "small",
                "url": "https://api.risloo.ir/storage/public/Files_1000/P9666FW9_small.png",
                "type": "image",
                "mime": "image/png",
                "exec": "png"
            }
        ],
        "phone_numbers": null
    },
    "created_at": 1667911647
}

const meta: Meta<typeof InfinitListItem> = {
    title: 'Components/InfinitListItem',
    component: InfinitListItem,
    tags: ['autodocs'],
    argTypes: {
        item: {
            control: {
                type: 'object',
            },
        },
        isActive: {
            control: 'boolean',
            defaultValue: false,
        },
    },
};

export default meta;

type Story = StoryObj<typeof InfinitListItem>;

export const Default: Story = {
    args: {
        item: sampleItem,
        isActive: false,
    },
};

export const ActiveItem: Story = {
    args: {
        item: sampleItem,
        isActive: true,
    },
};
