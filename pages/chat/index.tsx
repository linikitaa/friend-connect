import clsx from 'clsx'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/BaseLayout/BaseLayout'

interface Props {
  className?: string
}

const Chat = ({ className }: Props) => {
  return (
    <PageWrapper>
      <div className={clsx(className)}>Chat</div>
    </PageWrapper>
  )
}

Chat.getLayout = getLayout
export default Chat
