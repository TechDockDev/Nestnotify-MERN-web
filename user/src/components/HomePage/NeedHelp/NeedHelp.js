import { useState } from 'react'
import { Box, Typography, Grid, Button, Stack } from '@mui/material'
import FormInput from './FormInput'

const NeedHelp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        Email: "",
        ContactNumber: "",
        Message: ""
    });

    // <======🍀👇 Handle Change👇 🍀======>
    const handleChange = (e, index) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // <======🍀👆 Handle Change👆 🍀======>

    return (
        <Grid container px={2} display={"flex"} justifyContent={"center"} alignItems={"center"} >
            {/* form */}
            <Grid item xs={12} md={7} display={"flex"} direction={"column"} justifContent={"center"} alignItems={"center"} columnSpacing={'5px'}>
                {/*  heading grid */}
                <Grid container>
                    <Grid item xs={12} sx={{
                        textAlign: 'center',
                        padding: '0px',
                        margin: '0px'
                    }}>
                        <Typography sx={{
                            fontSize: { md: '40px', sm: '35px' },
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
                            letterSpacing: '0.5px',
                            color: '#333333'
                        }}>
                            Connect with us now!
                        </Typography>
                    </Grid>
                </Grid>

                {/*  form grid */}
                <Grid component={"form"} container columnSpacing={"5px"} rowSpacing={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item md={6} xs={11} >
                        <FormInput
                            inputType="text"
                            inputName="firstName"
                            inputValue={formData.firstName}
                            onChangeHandler={handleChange}
                            labelInputId="firstName"
                            placeholderText={"First Name"} />
                    </Grid>
                    <Grid item md={6} xs={11} >
                        <FormInput
                            inputType="text"
                            inputName="LastName"
                            inputValue={formData.lastName}
                            onChangeHandler={handleChange}
                            labelInputId="LastName"
                            placeholderText={"Last Name"} />
                    </Grid>
                    <Grid item md={6} xs={11}>
                        <FormInput
                            inputType="number"
                            inputName="ContactNumber"
                            inputValue={formData.ContactNumber}
                            onChangeHandler={handleChange}
                            labelInputId="ContactNumber"
                            placeholderText={"Contact Number"} />
                    </Grid>
                    <Grid item md={6} xs={11}>
                        <FormInput
                            inputType="text"
                            inputName="Email"
                            inputValue={formData.Email}
                            onChangeHandler={handleChange}
                            labelInputId="Email"
                            placeholderText={"Email"} />
                    </Grid>
                    <Grid item md={12} xs={11}>
                        <FormInput
                            inputType="text"
                            inputName="Message"
                            ismultiline={true}
                            rows={3}
                            inputValue={formData.Message}
                            onChangeHandler={handleChange}
                            labelInputId="Message"
                            placeholderText={"Message"} />
                    </Grid>
                    <Grid item md={12} xs={11}>
                        <Button sx={{
                            padding: '12px',
                            borderRadius: '64px',
                            fontSize: '12px',
                            width: '100%'
                        }}>
                            Send Your Request!
                        </Button>
                    </Grid>
                </Grid>
                {/*  form grid */}
            </Grid>
            {/*===========================image */}
            <Grid item md={5}>
                <Box
                    component="img"
                    sx={{
                        display: { md: 'block', xs: 'none' },
                        width: '100%',
                        boxSizing: 'border-box',
                        margin: '0px',
                        padding: '0px'
                    }}
                    alt="The house from the offer."
                    src="./assets/NeedHelp.png"
                />
            </Grid>
        </Grid >
    )
}

export default NeedHelp
