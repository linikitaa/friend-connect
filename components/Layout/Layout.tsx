import { PropsWithChildren, ReactElement } from 'react'
import { NextPage } from 'next'
import s from './Layout.module.scss'
import Header from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <div className={s.container}>
      <Header className={s.headerWrap} />
      <Sidebar className={s.sidebarWrap} />
      <div className={s.main}>{children}</div>
    </div>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
