import s from './Sidebar.module.scss'
import clsx from 'clsx'
import { LinkBlock } from '@/components/Header/LinkBlock/LinkBlock'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { ChatIcon } from '@/public/icons/ChatIcon'
import { ProfileIcon } from '@/public/icons/ProfileIcon'
import { NewsIcon } from '@/public/icons/NewsIcon'
import { UsersIcon } from '@/public/icons/UsersIcon'
import ContrastIcon from '@mui/icons-material/Contrast'
import { useThemeContext } from '@/components/ThemeProvider/ThemeProvider'
import { useTheme } from '@mui/material'

interface Props {
  className?: string
}
const menuItems = [
  { id: 'profile', title: 'Profile', icon: <ProfileIcon /> },
  { id: 'users', title: 'Users', icon: <UsersIcon /> },
  { id: 'chat', title: 'Chat', icon: <ChatIcon /> },
  { id: 'news', title: 'News', icon: <NewsIcon /> },
]

export const Sidebar = ({ className }: Props) => {
  const { toggleTheme } = useThemeContext()
  const theme = useTheme()
  return (
    <PageWrapper>
      <div
        className={clsx(s.Sidebar, className)}
        style={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        {menuItems.map(({ id, title, icon }) => (
          <LinkBlock key={id} icon={icon} title={title} />
        ))}
        <ContrastIcon
          style={{
            color: theme.palette.info.main,
          }}
          onClick={toggleTheme}
          className={s.themeBtn}
        />
      </div>
    </PageWrapper>
  )
}
