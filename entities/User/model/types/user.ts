export interface User {
  email: string
  password: string
}
interface UserSchema {
  userId: string
}

export const USER_LOCALSTORAGE_KEY = 'user'
