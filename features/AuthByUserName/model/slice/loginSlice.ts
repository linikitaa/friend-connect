import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '@/features/AuthByUserName/model/types/login'

const initialState: LoginSchema = {
  email: '',
  password: '',
  rememberMe: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {
  //       state.error = undefined
  //       state.isLoading = true
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.isLoading = false
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.error = action?.payload
  //       state.isLoading = false
  //     })
  // },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
