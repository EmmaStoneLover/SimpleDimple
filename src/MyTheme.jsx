import React from 'react'
import {
  green,
  purple,
  orange,
  blue,
  indigo,
  cyan,
  lime,
  pink,
  red,
} from '@mui/material/colors'
import { Paper } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const contrast = 300
export const firstColor = red[contrast]
export const firstDarkMode = false

export const contrastColors = [
  { color: pink[contrast], title: 'pink', checked: false },
  { color: green[contrast], title: 'green', checked: false },
  { color: purple[contrast], title: 'purple', checked: false },
  { color: orange[contrast], title: 'orange', checked: false },
  { color: blue[contrast], title: 'blue', checked: false },
  { color: indigo[contrast], title: 'indigo', checked: false },
  { color: red[contrast], title: 'red', checked: true },
  { color: cyan[contrast], title: 'cyan', checked: false },
  { color: lime[contrast], title: 'lime', checked: false },
]

export default function MyTheme({ children, darkMode, primaryMod }) {
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: darkMode ? 'dark' : 'light',
  //         primary: {
  //           main: primaryMod,
  //         },
  //       },
  //       border: 12,
  //     }),
  //   [darkMode]
  // )

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: primaryMod,
      },
    },
    border: '12px',
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper square>{children}</Paper>
    </ThemeProvider>
  )
}
