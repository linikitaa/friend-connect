import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
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
  const [themeMode, setThemeMode] = useState<ThemeType>(ThemeType.LIGHT)

  const toggleTheme = () => {
    setThemeMode(
      themeMode === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT,
    )
  }

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#427d9d',
        contrastText: '#fff',
      },
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
