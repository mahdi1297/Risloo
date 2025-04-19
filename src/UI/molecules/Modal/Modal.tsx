'use client'

import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.css'
import { ModalProps } from './Modal.types'

export const Modal = ({ isOpen, onClose, children, ariaLabel = 'Modal dialog' }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const portalRootRef = useRef<HTMLElement | null>(null)
  const cleanupRef = useRef(false)

  useEffect(() => {
    if (typeof document === 'undefined') return

    let portalRoot = document.getElementById('modal-root')
    if (!portalRoot) {
      portalRoot = document.createElement('div')
      portalRoot.id = 'modal-root'
      document.body.appendChild(portalRoot)
    }
    portalRootRef.current = portalRoot
    cleanupRef.current = false

    return () => {
      if (cleanupRef.current || !portalRootRef.current) return

      if (portalRootRef.current.childNodes.length === 0) {
        document.body.removeChild(portalRootRef.current)
        cleanupRef.current = true
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen || !modalRef.current) return

    const modalElement = modalRef.current
    const focusableElements = modalElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements.length > 0) {
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      firstElement.focus()

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }

      modalElement.addEventListener('keydown', handleTabKey)
      return () => {
        modalElement.removeEventListener('keydown', handleTabKey)
      }
    }
  }, [isOpen])

  if (!isOpen || !portalRootRef.current) return null

  return ReactDOM.createPortal(
    <div
      className={`${styles.overlay} ${!isOpen ? styles.overlayClosing : ''}`}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`${styles.modalContent} ${!isOpen ? styles.modalContentClosing : ''}`}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
      >
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </div>
    </div>,
    portalRootRef.current
  )
}
