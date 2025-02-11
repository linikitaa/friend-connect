import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import s from './Header.module.scss'
import clsx from 'clsx'
import { useTheme } from '@mui/material/styles'
import { useAppDispatch } from '@/store/store'
import React, { useState } from 'react'
import { LoginModal } from '@/features/AuthByUserName'
type PropsType = {
  className?: string
  title?: string
}
export default function Header({ className }: PropsType) {
  const theme = useTheme()
  const [isAuthModal, setIsAuthModal] = useState(false)
  // const dispatch = useAppDispatch()
  const onCloseModal = () => {
    setIsAuthModal(false)
  }
  const onShowModal = () => {
    setIsAuthModal(true)
  }
  // const onLogoutUser = () => {
  //   dispatch(userActions.logOut());
  // };

  return (
    <div className={clsx(s.header, className)}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ borderRadius: '5px' }}
          style={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              className={s.title}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Friends <p>Connect</p>
            </Typography>
            <Button color="inherit" onClick={onShowModal}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
