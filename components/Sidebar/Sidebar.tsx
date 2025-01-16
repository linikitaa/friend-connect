import s from './Sidebar.module.scss'
import clsx from 'clsx'
import { LinkBlock } from '@/components/Header/LinkBlock/LinkBlock'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { ChatIcon } from '@/assets/icons/ChatIcon'
import { ProfileIcon } from '@/assets/icons/ProfileIcon'
import { NewsIcon } from '@/assets/icons/NewsIcon'
import { UsersIcon } from '@/assets/icons/UsersIcon'

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
  return (
    <PageWrapper>
      <div className={clsx(s.Sidebar, className)}>
        {menuItems.map(({ id, title, icon }) => (
          <LinkBlock key={id} icon={icon} title={title} />
        ))}
      </div>
    </PageWrapper>
  )
}
