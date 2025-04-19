import type { Meta, StoryObj } from '@storybook/react';
import { ImageSlider } from './ImageSlider';
import './ImageSlider.module.css';


const IMAGES = [
    "https://api.risloo.ir/storage/public/Files_1000/P9666AGE_large.png",
    "https://api.risloo.ir/storage/public/Files_1000/P9666AGE_medium.png",
    "https://api.risloo.ir/storage/public/Files_1000/P9666AGE_original.png",
    "https://api.risloo.ir/storage/public/Files_1000/P9666AGE_small.png"
]

const meta: Meta<typeof ImageSlider> = {
    title: 'Components/ImageSlider',
    component: ImageSlider,
    tags: ['autodocs'],
    argTypes: {
        images: {
            control: {
                type: 'object',
            },
            description: 'Array of image URLs',
            defaultValue: IMAGES
        },
        showDots: {
            control: 'boolean',
            description: 'Toggle visibility of navigation dots',
            defaultValue: true
        }
    },
    parameters: {
        layout: 'centered',
    }
};

export default meta;

type Story = StoryObj<typeof ImageSlider>;

export const Default: Story = {
    args: {
        images: IMAGES,
        showDots: true
    },
    decorators: [
        (Story) => (
            <div style={{ width: '800px', maxWidth: '90vw' }}>
                <Story />
            </div>
        )
    ]
};

export const SingleImage: Story = {
    args: {
        images: [IMAGES?.[0]],
        showDots: false
    }
};

export const MultipleImages: Story = {
    args: {
        images: IMAGES
    }
};
