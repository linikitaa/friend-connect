import { PropsWithChildren, ReactElement } from 'react'
import { NextPage } from 'next'
import { Layout } from '../Layout'
import { CustomThemeProvider } from '@/components/ThemeProvider/Theme'

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  return <Layout> {children} </Layout>
}

export const getLayout = (page: ReactElement) => {
  return (
    <CustomThemeProvider>
      <BaseLayout>{page}</BaseLayout>
    </CustomThemeProvider>
  )
}
