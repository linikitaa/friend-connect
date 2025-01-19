import { PropsWithChildren } from 'react'
import { NextPage } from 'next'
import s from './Layout.module.scss'
import Header from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import clsx from 'clsx'
import { useTheme } from '@mui/material/styles'
export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  const theme = useTheme()

  return (
    <div className={s.container}>
      <Header className={s.headerWrap} />
      <Sidebar className={s.sidebarWrap} />
      <div
        style={{
          backgroundColor: theme.palette.secondary.main,
        }}
        className={clsx(s.main)}
      >
        {children}
      </div>
    </div>
  )
}

// export const getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>
// }
