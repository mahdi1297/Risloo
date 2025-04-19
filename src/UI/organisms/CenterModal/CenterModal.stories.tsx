import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CenterModal } from './CenterModal';
import { CenterModalProps } from './CenterModal.types';
import { CounselingCenter } from '@/types/CounselingCenter';

const sampleData: CounselingCenter = {
    "id": "RS966666Q",
    "manager": {
        "id": "GH966666P",
        "name": "دکتر مسعود جان‌بزرگی",
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
const meta: Meta<typeof CenterModal> = {
    title: 'Organisms/CenterModal',
    component: CenterModal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof CenterModal>;

export const Default: Story = {
    args: {
        data: sampleData,
        clearActiveItem: () => console.log('clearActiveItem called'),
    },
};

export const Hidden: Story = {
    args: {
        data: null,
        clearActiveItem: () => console.log('clearActiveItem called'),
    },
};
