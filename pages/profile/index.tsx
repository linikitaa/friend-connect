import clsx from 'clsx'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/BaseLayout/BaseLayout'
import { LoginModal } from '@/features/AuthByUserName'
import Button from '@mui/material/Button'
import { useState } from 'react'

interface Props {
  className?: string
}

const Profile = ({ className }: Props) => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }

  return (
    <PageWrapper>
      <div className={clsx(className)}>
        profile
        <Button onClick={openModal}>Open</Button>
        <LoginModal isOpen={open} onClose={closeModal} />
      </div>
    </PageWrapper>
  )
}

Profile.getLayout = getLayout
export default Profile
