import { PropsWithChildren } from 'react'
import { NextPage } from 'next'
import s from './Layout.module.scss'
import Header from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { useThemeContext } from '@/components/ThemeProvider/Theme'
import clsx from 'clsx'
export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  const { themeMode } = useThemeContext()

  return (
    <div className={s.container}>
      <Header className={s.headerWrap} />
      <Sidebar className={s.sidebarWrap} />
      <div className={clsx(s.main, s[themeMode])}>{children}</div>
    </div>
  )
}

// export const getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>
// }
