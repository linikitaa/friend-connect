import s from './LoginModal.module.scss'
import clsx from 'clsx'
import React from 'react'
import { LoginForm } from '@/features/AuthByUserName'
import { CustomModal } from '@/shared/ui/Modal/CustomModal'

interface Props {
  isOpen: boolean
  onClose?: () => void
  className?: string
}

export const LoginModal = ({ className, isOpen, onClose }: Props) => {
  return (
    <CustomModal
      className={clsx(s.LoginModal, className)}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm onSuccess={onClose} />
    </CustomModal>
  )
}
