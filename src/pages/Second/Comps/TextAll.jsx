import React from 'react'
import { LinearProgress, Typography } from '@mui/material'
import MyBox from '../../../components/MyBox'
import { Box } from '@mui/system'

export default function TextAll({ load, setTextMore, setDeleted }) {
  return (
    <MyBox>
      <Typography variant="h6">Some shit</Typography>
      <br />
      {load && load !== null ? (
        load
          .slice()
          .reverse()
          .map((item) => {
            return (
              <MyBox key={item._id} p={'0px'} mb={15}>
                <div
                  onClick={() => {
                    setTextMore(item)
                    setDeleted(null)
                  }}
                  href="#BoxRight"
                  style={{
                    // wordBreak: 'break-all',
                    padding: 15,
                    paddingLeft: 25,
                    cursor: 'pointer',
                  }}
                >
                  <Typography variant="h6" noWrap>
                    {item.text}
                  </Typography>
                </div>
              </MyBox>
            )
          })
      ) : (
        <Box textAlign="center">
          <LinearProgress />
        </Box>
      )}
    </MyBox>
  )
}
