import React from 'react'
import { Grid, Box, Typography, Stack, Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Carousel from 'react-material-ui-carousel'

const items = [
    {
        heading: "A Great Platform for Buying & Selling your Property Easily",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum nisi diam, et feugiat turpis egestas nec. Nullam no enim nisl."
    },
    {
        heading: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum nisi diam, et feugiat turpis egestas nec. Nullam no enim nisl."
    }
]

const HeroSection = () => {

    return (
        <Carousel prev={() => { }} next={() => { }}
            indicatorContainerProps={{
                style: {
                    transitionDuration: '200ms'
                }
            }}
            interval="3000"

        >
            {items.map((item) => {
                return (<Grid container sx={{
                    position: 'relative',
                    height: '600px'
                }}>
                    <Grid item md={5}>
                        <Stack justifyContent="center" alignItems="center" rowGap={'20px'} sx={{
                            padding: { md: '150px 0 0 50px', xs: '25% 15% ' },
                        }}>
                            <Typography sx={{
                                color: '#0D507D',
                                fontSize: '32px',
                                fontWeight: 700,
                                lineHeight: '48px',
                                letterSpacing: '0.5',
                                textAlign: { md: 'left', sm: 'center' }
                            }}>
                                {item.heading}
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '400',
                                paddingRight: { md: '30%', sm: '0px' },
                                lineHeight: '24px',
                                textAlign: { md: 'left', sm: 'center' }
                            }}>
                                {item.description}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: { md: 'left', sm: 'center' },
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                <Button sx={{
                                    padding: '12px',
                                    borderRadius: '64px',
                                    fontSize: '12px',
                                }}>
                                    Get Started Now
                                    <ArrowForwardIosIcon sx={{
                                        paddingLeft: '5px'
                                    }} />
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item md={7} >
                        <Box
                            component="img"
                            sx={{
                                position: 'absolute',
                                width: '30%',
                                right: '140px',
                                bottom: '20%',
                                display: { md: 'block', xs: 'none' },
                            }}
                            alt="Looking home."
                            src="./assets/LookingHome.gif"
                        />
                        <Box
                            component="img"
                            sx={{
                                position: 'absolute',
                                width: '10%',
                                right: 0,
                                bottom: '20%',
                                display: { md: 'block', xs: 'none' },
                            }}
                            alt="home"
                            src="./assets/home.png"
                        />
                        <Box
                            component="img"
                            sx={{
                                position: 'absolute',
                                width: { lg: '50%', md: '60%' },
                                bottom: { md: '10%', lg: '0' },
                                right: 0,
                                display: { md: 'block', xs: 'none' },
                                zIndex: '-1',
                            }}
                            alt="backgrounVector"
                            src="./assets/background-vector.png"
                        />
                    </Grid>
                </Grid >
                )
            })}
        </Carousel>
    )
}

export default HeroSection
