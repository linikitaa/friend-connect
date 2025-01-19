import React, { ReactNode, useCallback, useEffect, useRef } from 'react'
import Modal from '@mui/material/Modal'
import { useTheme } from '@mui/material/styles'

interface Props {
  isOpen: boolean
  onClose?: () => void
  className?: string
  children?: ReactNode
}
const ANIMATION_DELAY = 300
export const CustomModal = ({ children, onClose, isOpen }: Props) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const closeModal = useCallback(() => {
    if (onClose) {
      timerRef.current = setTimeout(() => {}, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    },
    [closeModal],
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isOpen, onKeyDown])

  const theme = useTheme()

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        // BackdropProps={{
        //   style: {
        //     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Затемнение
        //     zIndex: 1, // Задний план
        //   },
        // }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 2, // Модальное окно поверх
            width: 450,
            height: 250,
            backgroundColor: theme.palette.info.main,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            padding: '16px',
          }}
        >
          {children}
        </div>
      </Modal>
    </>
  )
}
