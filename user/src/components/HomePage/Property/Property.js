import React from 'react'
import { Box, Stack, Typography, Grid, Paper } from '@mui/material'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const cardArray = [
    {
        image: './assets/property.png',
        name: 'Goel Heights',
        size: '3BHK Apartment',
        address: 'Faizabad Road Near IIM Road',
        city: 'Lucknow, U.P',
        money: '$50,000'
    },
    {
        image: './assets/property.png',
        name: 'Goel Heights',
        size: '3BHK Apartment',
        address: 'Faizabad Road Near IIM Road',
        city: 'Lucknow, U.P',
        money: '$50,000'
    },
    {
        image: './assets/property.png',
        name: 'Goel Heights',
        size: '3BHK Apartment',
        address: 'Faizabad Road Near IIM Road',
        city: 'Lucknow, U.P',
        money: '$50,000'
    },
    {
        image: './assets/property.png',
        name: 'Goel Heights',
        size: '3BHK Apartment',
        address: 'Faizabad Road Near IIM Road',
        city: 'Lucknow, U.P',
        money: '$50,000'
    }
]
const Property = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Stack justifyContent="left" alignItems="center" flexWrap='wrap'
                sx={{
                    marginY: '100px',
                    gap: '60px',
                    padding: '10px'
                }}>
                {/* heading */}
                <Typography sx={{
                    fontSize: { lg: '40px', md: '30px' },
                    fontWeight: 400,
                    color: '#0D507D',
                    textAlign: 'center'
                }}>
                    Check out some of these
                    <Box component="span" sx={{
                        color: '#2298BC'
                    }} m={1}>
                        Great Properties
                    </Box>
                    near you
                </Typography>
                {/* cards  */}
                <Grid container spacing={2} >
                    {cardArray.map((data) => {
                        return (
                            <Grid item md={4} lg={3} sm={6} xs={12}>
                                <Paper elevation={2} sx={{
                                    width: '282px',
                                    height: '400px',
                                    padding: '20px',
                                    borderRadius: '24px',
                                    margin: '0 auto'
                                }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            width: '100%',
                                            height: '156px',
                                            borderRadius: '12px'
                                        }}
                                        alt="The house from the offer."
                                        src={data.image}
                                    />
                                    <Stack justifyContent="space-between" alignItems="left" sx={{
                                        marginY: '20px',
                                    }}>
                                        <Typography sx={{
                                            color: '#0E3D4B',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            lineHeight: '27px'
                                        }}>
                                            {data.name}
                                        </Typography>
                                        <Typography sx={{
                                            color: '#0E3D4B',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '21px'
                                        }}>
                                            {data.size}
                                        </Typography>
                                        <Typography sx={{
                                            color: '#0E3D4B',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '21px',
                                            filter: 'blur(6px)'
                                        }}>
                                            {data.address}
                                        </Typography>
                                        <Typography sx={{
                                            color: '#0E3D4B',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '21px'
                                        }}>
                                            {data.city}
                                        </Typography>
                                        <Typography sx={{
                                            color: '#0E3D4B',
                                            fontSize: '18px',
                                            fontWeight: 400,
                                            lineHeight: '21px',
                                            filter: 'blur(6px)'
                                        }}>
                                            {data.money}
                                        </Typography>
                                    </Stack> {/* card content */}

                                    <Button fullWidth endIcon={<ArrowForwardIosIcon />}
                                    >
                                        view
                                    </Button>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid> {/* cards grid*/}
            </Stack> {/* flex */}
        </Box>
    )
}

export default Property
