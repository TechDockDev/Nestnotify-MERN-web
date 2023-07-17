import React from 'react'
import { Grid, TextField } from '@mui/material'

const FormInput = ({ ismultiline, rows, inputType, inputName, inputValue, onChangeHandler, labelInputId, requiredTrue, placeholderText }) => {
    return (
        <>
            {!ismultiline ?
                <TextField
                    fullWidth
                    label={labelInputId}
                    type={inputType}
                    name={inputName}
                    value={inputValue}
                    onChange={onChangeHandler}
                    id={labelInputId}
                    placeholder={placeholderText}
                    autoComplete="off"
                    size="small"
                    sx={{
                        "& .MuiInputBase-input":
                        {
                            borderRadius: '6px'
                        },
                        "& .MuiInputLabel-root": {
                            fontSize: '16px',
                            paddingBottom: '2px'
                        }
                    }}
                /> :
                <TextField
                    fullWidth
                    multiline
                    rows={rows}
                    label={labelInputId}
                    type={inputType}
                    name={inputName}
                    value={inputValue}
                    onChange={onChangeHandler}
                    id={labelInputId}
                    placeholder={placeholderText}
                    autoComplete="off"
                    sx={{
                        "& .MuiInputBase-input":
                        {
                            fontSize: '16px',
                            borderRadius: '6px'
                        },
                        "& .MuiInputLabel-root": {
                            fontSize: '16px',
                            paddingBottom: '2px'
                        }
                    }}
                />}
        </>
    )
}

export default FormInput
