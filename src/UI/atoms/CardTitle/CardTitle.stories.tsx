import type { Meta, StoryObj } from '@storybook/react';
import { CardTitle } from './CardTitle';
import './CardTitle.module.css'; // Import component styles

const meta: Meta<typeof CardTitle> = {
    title: 'Components/Cards/Title',
    component: CardTitle,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'The text content of the title',
        },
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof CardTitle>;

// Default story
export const Default: Story = {
    args: {
        title: 'عنوان پیشفرض',
    },
};

// Long title story
export const LongTitle: Story = {
    args: {
        title: 'یک عنوان طولانی برای تست اینکه آیا متن به درستی در UI نمایش داده می‌شود یا خیر. این متن باید به اندازه کافی طولانی باشد تا بتواند از خط خارج شود و نحوه نمایش آن را بررسی کنیم.',
    },
};

// Empty title story (edge case)
export const EmptyTitle: Story = {
    args: {
        title: '',
    },
};