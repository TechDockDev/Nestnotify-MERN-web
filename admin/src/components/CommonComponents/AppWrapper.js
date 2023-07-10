import { Stack } from '@mui/material'
import React from 'react'

const AppWrapper = ({children}) => {
  return (
    <Stack className='App'sx={{
        width:"100%",
        maxWidth:"1440px",
        height:"100%",
        boxSizing:"border-box",
        marginX:"auto",
        display:"flex",
        flexDirection:"column",
        alignItems:{xs:"center", md:"end"}
    }}>
        {children}
    </Stack>
  )
}

export default AppWrapper