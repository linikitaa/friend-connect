import clsx from 'clsx'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'

interface Props {
  className?: string
}

const Profile = ({ className }: Props) => {
  return (
    <PageWrapper>
      <div className={clsx(className)}>profile</div>
    </PageWrapper>
  )
}

Profile.getLayout = getLayout
export default Profile
