import { createSlice } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from '@/entities/User/model/types/user'

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
  avatar: null as string | null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true
    },
    logOut: (state) => {
      state.isAuth = false
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.isAuth = JSON.parse(user)
      }
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
