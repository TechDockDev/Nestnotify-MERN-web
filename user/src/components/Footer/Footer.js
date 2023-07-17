import React from 'react'
import { Box, Stack, Grid, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box>
            <Box
                component="img"
                sx={{
                    display: 'block',
                    width: '100%'
                }}
                alt="building"
                src="./assets/building.svg"
            />
            <Box sx={{
                padding: '60px',
                backgroundColor: '#0D507D',
            }}>
                <Grid container columnSpacing={2} sx={{
                    width: '100%',
                }}>
                    {/* 1st section*/}
                    <Grid item md={5} xs={12}>
                        <Box
                            component="img"
                            sx={{
                                display: 'block',
                                width: '230px',
                                height: '50px',
                                marginBottom: '15px'
                            }}
                            alt="logo"
                            src="./logo.png"
                        />
                        <Typography sx={{
                            fontWeight: 400,
                            color: '#fff',
                            fontSize: '16px',
                            lineHeight: '25px',
                            width: '55%'
                        }}>
                            Discover a World of Possibilities with Our Expertly Crafted Buying and Selling Platform!
                        </Typography>
                    </Grid>
                    {/* 2nd section*/}
                    <Grid md={2} xs={12}>
                        <Stack gap="24px" sx={{
                            color: '#fff',
                            padding: '16px'
                        }}>
                            <Typography sx={{
                                fontSize: '18px',
                                fontWeight: 600,
                            }}>
                                COMPANY
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                About
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                How it works
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                Testimonials
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* 3rd section*/}
                    <Grid md={2} xs={12}>
                        <Stack gap="24px" sx={{
                            color: '#fff',
                            padding: { md: '16px 0px', xs: '16px' }
                        }}>
                            <Typography sx={{
                                fontSize: '18px',
                                fontWeight: 600,
                            }}>
                                QUICK LINKS
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                Terms & Conditions
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                How it works
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                Feedback
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                Report a problem
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid md={3} xs={12}>
                        <Stack gap="24px" sx={{
                            color: '#fff',
                            padding: '16px'
                        }}>
                            <Typography sx={{
                                fontSize: '18px',
                                fontWeight: 600,
                            }}>
                                Contact Us
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                Toll Free - 0123456789
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                            }}>
                                Email : feedback@nestnotify.com
                            </Typography>
                            <Box sx={{
                                marginBottom: '24px'
                            }}>
                                <Typography sx={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                }}>
                                    Connect with us
                                </Typography>
                                <Stack direction="row" gap="32px" sx={{
                                    marginTop: "16px"
                                }}>
                                    <FacebookIcon sx={{
                                        fontSize: "32px"
                                    }}></FacebookIcon>
                                    <TwitterIcon sx={{
                                        fontSize: "32px"
                                    }}></TwitterIcon>
                                    <YouTubeIcon sx={{
                                        fontSize: "32px"
                                    }}></YouTubeIcon>
                                    <InstagramIcon sx={{
                                        fontSize: "32px"
                                    }}></InstagramIcon>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Footer
