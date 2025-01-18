import clsx from 'clsx'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/BaseLayout/BaseLayout'

interface Props {
  className?: string
}

const Users = ({ className }: Props) => {
  return (
    <PageWrapper>
      <div className={clsx(className)}>Users</div>
    </PageWrapper>
  )
}

Users.getLayout = getLayout
export default Users
