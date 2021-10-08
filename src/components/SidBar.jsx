import React, { useState } from 'react'
import { Check, ChevronLeft } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import {
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Switch,
} from '@mui/material'
import { contrastColors } from '../MyTheme'

const drawerWidth = 200

const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    // ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
  },
}))

export default function SidBar({
  sideBar,
  setSideBar,
  setPrimaryMod,
  darkMode,
  setDarkMode,
}) {
  const classes = useStyles()

  const [themeColors, useThemeColors] = useState(contrastColors)

  function ChangeThemeColor(color) {
    useThemeColors(
      themeColors.map((i) => {
        if (i.checked) {
          i.checked = false
        }
        if (i.color === color) {
          i.checked = true
        }
        return i
      })
    )
  }

  return (
    <Drawer
      className={classes.drawer}
      // variant="persistent"
      anchor="left"
      open={sideBar}
      onClose={() => setSideBar(false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton
          onClick={() => {
            setSideBar(false)
          }}
        >
          <ChevronLeft />
        </IconButton>
      </div>

      <List>
        <ListItem>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(event) => {
                  setDarkMode(event.target.checked)
                  console.log(darkMode)
                }}
                name="checkedA"
              />
            }
            label="Dark mode"
          />
        </ListItem>

        {themeColors.map((item) => {
          return (
            <ListItem
              button
              key={item.color}
              onClick={() => {
                setPrimaryMod(item.color)
                ChangeThemeColor(item.color)
              }}
            >
              <ListItemText primary={item.title} />
              {item.checked ? <Check color="primary" /> : ''}
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}
