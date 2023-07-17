import React from 'react'
import { Box, Grid } from '@mui/material'

const CardSection = () => {
    return (
        <Box sx={{
            padding: '0px',
            backgroundColor: '#0D507D',
            Width: '100%',
            clipPath: 'polygon(0 9%, 100% 1%, 100% 100%, 0% 100%)'
        }}>
            <Grid container Spacing={4} sx={{
                "& .MuiGrid-root":
                {
                    margin: "0 auto",
                    padding: '20px 60px'
                }
            }}>
                <Grid item xs={11} md={5}>
                    <Box
                        component="img"
                        sx={{

                            display: { md: 'block', xs: 'none' },
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                        alt="The house from the offer."
                        src="./assets/ForSale.png"
                    />
                </Grid>
                <Grid item xs={11} md={7}>

                </Grid>
            </Grid>
        </Box >
    )
}

export default CardSection
