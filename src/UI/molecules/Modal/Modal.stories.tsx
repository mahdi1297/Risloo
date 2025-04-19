import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Modal } from './Modal'
import './Modal.module.css'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
    onClose: {
      action: 'closed',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A reusable accessible modal component.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Modal>

const ModalContent = () => (
  <div style={{ padding: '20px' }}>
    <h2>Modal Title</h2>
    <p>This is the modal content. It can contain any React components.</p>
  </div>
)

export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalContent />
        </Modal>
      </div>
    )
  },
  args: {},
}
