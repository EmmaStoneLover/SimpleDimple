import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Paper } from '@mui/material'
import Home from './pages/Home/Home'
import Second from './pages/Second/Second'
import Login from './pages/Auth/Login'

export default function MyRoutes({ setPrimaryMod, textDay, setTextDay, URL }) {
  return (
    <div id="router">
      <Switch>
        <Route path="SimpleDimple/" exact>
          <Paper elevation={0}>
            <Home
              setPrimaryMod={setPrimaryMod}
              textDay={textDay}
              setTextDay={setTextDay}
            />
          </Paper>
        </Route>
        <Route path="SimpleDimple/second" exact>
          <Paper elevation={0}>
            <Second setPrimaryMod={setPrimaryMod} URL={URL} />
          </Paper>
        </Route>
        <Route path="SimpleDimple/login" exact>
          <Paper elevation={0}>
            <Login URL={URL} />
          </Paper>
        </Route>
      </Switch>
    </div>
  )
}
