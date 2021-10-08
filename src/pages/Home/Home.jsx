import React from 'react'
import InputChange from './Comps/InputHome'
import MousePointer from './Comps/MousePointer'
import AddText from './Comps/AddText'
import MyBox from '../../components/MyBox'
import LoginHomeBox from './Comps/LoginHomeBox'
import { Container, Grid, Typography } from '@mui/material'

export default function Home({ textDay, setTextDay }) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MyBox>
            <Typography variant="h3" style={{ marginBottom: 25 }}>
              Home page
            </Typography>
            <InputChange textDay={textDay} setTextDay={setTextDay} />
          </MyBox>
          <br />
          <LoginHomeBox />
        </Grid>
        <Grid item xs={12} md={7}>
          <MyBox>
            <AddText />
          </MyBox>
        </Grid>
        <Grid item xs={12} md={1}>
          <MousePointer />
        </Grid>
      </Grid>
    </Container>
  )
}
