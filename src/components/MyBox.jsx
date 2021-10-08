import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/system'

// const useStyles = makeStyles((theme) => ({
//   bB: { borderRadius: theme },
// }))

export default function MyBox({ children, pos, p, mb, shadow, w, cl }) {
  return (
    <Box
      className={cl}
      textAlign={pos}
      sx={{ boxShadow: shadow ? shadow : 7, borderRadius: 3 }}
      padding={p ? p : 3}
      width={w ? w : 'auto'}
      style={{
        overflow: 'hidden',
        marginBottom: mb ? mb : 5,
      }}
    >
      {children}
    </Box>
  )
}
