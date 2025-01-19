import { TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

export const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value)
  }
  const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const theme = useTheme()

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <TextField
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '5px',
        }}
        // style={{
        //   backgroundColor: '#69a6ea',
        //   border: '1px solid #69a6ea',
        //   padding: '5px',
        // }}
        color={'secondary'}
        variant={'outlined'}
        required
        value={userName}
        placeholder={'введите username'}
        type="text"
        size={'small'}
        id={'username'}
        onChange={onChangeValueHandler}
      />
      <TextField
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '5px',
        }}
        color={'primary'}
        variant={'outlined'}
        required
        value={password}
        placeholder={'введите password'}
        type="text"
        size={'small'}
        id={'password'}
        onChange={onChangePasswordHandler}
      />
      <Button color={'secondary'} variant={'contained'}>
        Отправить
      </Button>
    </Box>
  )
}
