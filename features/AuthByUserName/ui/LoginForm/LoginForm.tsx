import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { useAppDispatch } from '@/store/store'
import { Input } from '@/shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { selectLoginState } from '@/features/AuthByUserName/model/selectors/selectLoginState'
import { loginActions } from '@/features/AuthByUserName/model/slice/loginSlice'
import { loginByUsername } from '@/features/AuthByUserName/model/services/loginByUsername'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch()
  const { email, password } = useSelector(selectLoginState)
  const onChangeValueHandler = (email: string) => {
    dispatch(loginActions.setEmail(email))
  }
  const onChangePasswordHandler = (password: string) => {
    dispatch(loginActions.setPassword(password))
  }

  const onClickLoginForm = async () => {
    const res = await dispatch(loginByUsername({ email, password }))
    if (loginByUsername.fulfilled.match(res)) {
      if (onSuccess) {
        onSuccess()
      }
    } else {
      console.error('Login failed:', res.payload)
    }
  }
  const theme = useTheme()

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'end',
        gap: '1rem',
      }}
    >
      <p>free@samuraijs.com</p>
      <p>free</p>
      <Input
        style={{ backgroundColor: theme.palette.secondary.main }}
        value={email}
        placeholder={'введите email'}
        type="text"
        id={'email'}
        onChange={onChangeValueHandler}
      />
      <Input
        style={{ backgroundColor: theme.palette.secondary.main }}
        value={password}
        placeholder={'введите password'}
        type="text"
        id={'password'}
        onChange={onChangePasswordHandler}
      />
      <Button
        onClick={onClickLoginForm}
        color={'secondary'}
        variant={'contained'}
      >
        Отправить
      </Button>
    </Box>
  )
}
