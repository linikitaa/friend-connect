import axios from 'axios'
import process from 'process'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': process.env.NEXT_API_KEY,
  },
})

// headers: {
//   authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
// },
