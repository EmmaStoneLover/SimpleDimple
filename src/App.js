import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SidBar from './components/SidBar'
import MyTheme from './MyTheme'
import MyRoutes from './MyRoutes'
import useMediaQuery from '@mui/material/useMediaQuery'
import { firstColor } from './MyTheme'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [sideBar, setSideBar] = useState(false)
  const [darkMode, setDarkMode] = useState(prefersDarkMode)
  const [primaryMod, setPrimaryMod] = useState(firstColor)
  const [textDay, setTextDay] = useState('Some text')

  const URL = 'https://emmastonenodejs.herokuapp.com'
  // const URL = 'http://localhost:8000'

  return (
    <MyTheme darkMode={darkMode} primaryMod={primaryMod}>
      <div id="content">
        <main>
          <Router>
            <Header setSideBar={setSideBar} />
            <SidBar
              sideBar={sideBar}
              setSideBar={setSideBar}
              setPrimaryMod={setPrimaryMod}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <MyRoutes
              setPrimaryMod={setPrimaryMod}
              textDay={textDay}
              setTextDay={setTextDay}
              URL={URL}
            />
          </Router>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </MyTheme>
  )
}
