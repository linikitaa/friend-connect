import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice'
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
