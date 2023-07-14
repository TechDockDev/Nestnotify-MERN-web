import React from 'react'
import { Stack, Box, Typography, Grid } from '@mui/material'
import Form from './Form'

const NeedHelp = () => {
    return (
        <Grid container>

            {/* form  */}
            <Grid item md={7} sx={{
                margin: '0 auto'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        fontSize: { md: '40px', sm: '24px' },
                        fontWeight: 600,
                        color: '#0D507D'
                    }}>
                        Questions?
                        <Box component="span" md={1}
                            sx={{
                                color: '#2298BC'
                            }}>
                            Need Help?
                        </Box>
                    </Typography>
                    <Typography sx={{
                        fontWeight: 500,
                        fontSize: '26px',
                        lineHeight: '40px',
                        letterSpacing: '0.5px',
                        color: '#333333'
                    }}>
                        Connect with us now!
                    </Typography>
                    <Form />
                </Box>
            </Grid>

            {/* image */}
            <Grid item md={5}>
                <Box
                    component="img"
                    sx={{
                        display: { md: 'block', xs: 'none' },
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box',
                    }}
                    alt="The house from the offer."
                    src="./assets/NeedHelp.png"
                />
            </Grid>
        </Grid >
    )
}

export default NeedHelp
