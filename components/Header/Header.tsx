import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import s from './Header.module.scss'
import clsx from 'clsx'
type PropsType = {
  className?: string
  title?: string
}
export default function Header({ className }: PropsType) {
  return (
    <div className={clsx(s.header, className)}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ borderRadius: '5px' }}>
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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
