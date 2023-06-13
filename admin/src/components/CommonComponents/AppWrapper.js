import { Stack } from '@mui/material'
import React from 'react'

const AppWrapper = ({children}) => {
  return (
    <Stack className='App'sx={{
        width:"100%",
        height:"100%",
        boxSizing:"border-box",
        marginX:"auto"
    }}>
        {children}
    </Stack>
  )
}

export default AppWrapper