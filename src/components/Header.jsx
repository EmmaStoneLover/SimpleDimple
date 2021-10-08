import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

export default function Header({ setSideBar }) {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setSideBar(true)}
            sx={{ mr: 2 }}
            style={{ marginRight: 20 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SimpleDimple
          </Typography>
          <div>
            <Link to="SimpleDimple/" exact="true" className={classes.link}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              to="SimpleDimple/second"
              exact="true"
              className={classes.link}
            >
              <Button color="inherit">Second</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
