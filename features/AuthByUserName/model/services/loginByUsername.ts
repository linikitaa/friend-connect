import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/store/StateSchema'
import { USER_LOCALSTORAGE_KEY } from '@/entities/User/model/types/user'
import { instance } from '@/api/instance'

export interface loginByUsernameProps {
  email: string | undefined
  password: string | undefined
}

export const loginByUsername = createAsyncThunk<
  { id: number },
  loginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await instance.post('/auth/login', authData)

    if (!res.data) {
      return rejectWithValue('Failed to login')
    }
    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(res.data.data.token),
    )
    console.log(res)
    return res.data
  } catch (err) {
    console.error(err)
    return rejectWithValue('Network error')
  }
})
