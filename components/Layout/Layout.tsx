import { PropsWithChildren } from 'react'
import { NextPage } from 'next'
import s from './Layout.module.scss'
import Header from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import clsx from 'clsx'
import { useTheme } from '@mui/material/styles'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  const theme = useTheme()

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

// export const getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>
// }
