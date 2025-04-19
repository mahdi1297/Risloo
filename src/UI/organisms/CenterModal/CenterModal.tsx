import React, { FC, useEffect, useState } from 'react'

import { Modal } from '@/UI/molecules/Modal'

import { CenterItem } from '../CenterItem'
import { CenterModalProps } from './CenterModal.types'

export const CenterModal: FC<CenterModalProps> = ({ data, clearActiveItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (data?.id) {
      setIsModalOpen(true)
      return
    }

    setIsModalOpen(false)
  }, [data?.id])

  const closeModal = () => {
    clearActiveItem()
    setIsModalOpen(false)
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CenterItem data={data} />
      </Modal>
    </div>
  )
}
