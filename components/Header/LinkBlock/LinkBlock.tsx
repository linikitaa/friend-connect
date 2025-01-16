import Link from 'next/link'
import s from './LinkBlock.module.scss'
import { ReactNode } from 'react'
type PropsType = {
  title: string
  icon: ReactNode
}

export const LinkBlock = (props: PropsType) => {
  const { title, icon } = props

  return (
    <Link className={s.link} href={`/${title.toLowerCase()}`}>
      <div className={s.icon}>{icon}</div>
      <span className={s.linkText}>{title}</span>
    </Link>
  )
}
