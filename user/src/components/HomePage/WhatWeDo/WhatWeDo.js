import React from 'react'
import { Box, Stack, Typography, Grid } from '@mui/material'

const WhatWeDo = () => {
    return (
        <Box sx={{
            padding: '0px',
            backgroundColor: '#0D507D',
            Width: '100%',
            clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0% 100%);',
            paddingBottom: '80px'
        }}>
            <Stack justifyContent="center" alignItems="center" spacing={6} marginX={{ xs: '2rem', md: '5rem' }}
                sx={{
                    marginTop: '94px',
                }}
            >
                <Typography sx={{
                    color: '#FFF',
                    fontSize: '40px',
                    fontWeight: 600
                }}
                >What We Do?</Typography>
                <Typography sx={{
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '30px',
                    letterSpacing: '0.5px'
                }}>
                    Lorem ipsum dolor sit amet, dol co nsectetur adipiscing elit. Pell vestibulum nisi diam, et feugiat turpis egestas nec. Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit. Pellsque vestibulum nisi diam, feugiat turpis.
                </Typography>

                <Grid container spacing={6} sx={{
                    "& .MuiGrid-root":
                    {
                        paddingLeft: '0px'
                    }
                }}>
                    <Grid item xs={12} md={7}>
                        {/*  3 blocks */}
                        <Stack justifyContent="space-between" alignItems="center" spacing={4} paddingRight={{ xs: "0px", md: "20px" }}>
                            {/* block 1 */}
                            <Box sx={{
                                width: '100%',
                                backgroundColor: '#fff',
                                height: '20%',
                                borderRadius: '16px',
                                padding: '20px'
                            }}>
                                <Stack direction={{ md: "row", xs: "column" }} justifyContent="center" alignItems="center" spacing={3}
                                    sx={{
                                        textAlign: 'left',
                                    }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            width: '80px',
                                            height: '80px'
                                        }}
                                        alt="The house from the offer."
                                        src="./assets/PurchaseHome.png"
                                    />
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            lineHeight: '24px',
                                            color: '#0D507D'
                                        }}>
                                            FIND & BUY Your Property
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: { xs: '14px', md: '16px' },
                                            fontWeight: 400,
                                            color: '#333333'
                                        }}>
                                            Lorem ipsum dolor sit amet, dolor consectetur piscing elit. Pellsque vestibulum nisi diam, et feugiat turpis egestas.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            {/* block 2 */}
                            <Box sx={{
                                width: '100%',
                                backgroundColor: '#fff',
                                height: '20%',
                                borderRadius: '16px',
                                padding: '20px'
                            }}>
                                <Stack direction={{ md: "row", xs: "column" }} justifyContent="center" alignItems="center" spacing={3}
                                    sx={{
                                        textAlign: 'left',
                                    }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            width: '80px',
                                            height: '80px'
                                        }}
                                        alt="The house from the offer."
                                        src="./assets/HomeForRent.png"
                                    />
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            lineHeight: '24px',
                                            color: '#0D507D'
                                        }}>
                                            SELL Your Property
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: { xs: '14px', md: '16px' },
                                            fontWeight: 400,
                                            color: '#333333'
                                        }}>
                                            Lorem ipsum dolor sit amet, dolor consectetur piscing elit. Pellsque vestibulum nisi diam, et feugiat turpis egestas.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            {/* block 3 */}
                            <Box sx={{
                                width: '100%',
                                backgroundColor: '#fff',
                                height: '20%',
                                borderRadius: '16px',
                                padding: '20px'
                            }}>
                                <Stack direction={{ md: "row", xs: "column" }} justifyContent="center" alignItems="center" spacing={3}
                                    sx={{
                                        textAlign: 'left',
                                    }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            width: '80px',
                                            height: '80px'
                                        }}
                                        alt="The house from the offer."
                                        src="./assets/RentSignboard.png"
                                    />
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            lineHeight: '24px',
                                            color: '#0D507D'
                                        }}>
                                            RENT Your Property
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: { xs: '14px', md: '16px' },
                                            fontWeight: 400,
                                            color: '#333333'
                                        }}>
                                            Lorem ipsum dolor sit amet, dolor consectetur piscing elit. Pellsque vestibulum nisi diam, et feugiat turpis egestas.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    {/* image */}
                    <Grid item xs={12} md={5} justifyContent="center" alignItems="center">
                        <Box
                            component="img"
                            sx={{
                                display: { md: 'block', xs: 'none' },
                                width: '100%',
                                height: '100%',
                                boxSizing: 'border-box',
                            }}
                            alt="The house from the offer."
                            src="./assets/House_searching.png"
                        />
                    </Grid>
                </Grid>
            </Stack >
        </Box >
    )
}

export default WhatWeDo
