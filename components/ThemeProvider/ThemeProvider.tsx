import { createContext, PropsWithChildren, useContext } from 'react'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useThemeMode } from '@/components/ThemeProvider/useThemeMode'
export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}

interface ThemeContextProps {
  themeMode: ThemeType
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  const { themeMode, toggleTheme, isInitialized } = useThemeMode()

  if (!isInitialized) {
    return null // Предотвращаем рендеринг до загрузки темы
  }

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: { main: themeMode === 'light' ? '#427d9d' : '#1a1d1e' },
      secondary: { main: themeMode === 'light' ? '#ddf2fd' : '#24363d' },
      info: { main: themeMode === 'light' ? '#427d9d' : '#ddf2fd' },
    },
  })

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a CustomThemeProvider')
  }
  return context
}
