import { useEffect, useState } from 'react'
import { ThemeType } from '@/components/ThemeProvider/ThemeProvider'
export const LOCAL_STORAGE_THEME_KEY = 'themeKey'

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeType>(ThemeType.LIGHT)

  const [isInitialized, setIsInitialized] = useState(false)
  useEffect(() => {
    const storedTheme =
      (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) ||
      ThemeType.LIGHT
    setThemeMode(storedTheme)
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      document.body.className = themeMode
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeMode)
    }
  }, [themeMode, isInitialized])

  const toggleTheme = () => {
    const newTheme =
      themeMode === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT
    if (setThemeMode) {
      setThemeMode(newTheme)
    }
    document.body.className = newTheme
  }

  return { themeMode, toggleTheme, isInitialized }
}
