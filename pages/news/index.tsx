import clsx from 'clsx'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'

interface Props {
  className?: string
}

const News = ({ className }: Props) => {
  return (
    <PageWrapper>
      <div className={clsx(className)}>News</div>
    </PageWrapper>
  )
}

News.getLayout = getLayout
export default News
