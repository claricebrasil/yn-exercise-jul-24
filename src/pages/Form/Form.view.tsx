import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useUpdateAnswers } from '../../api-hooks/useUpdateAnswers'
import { DomainOption } from '../../domain/types'
import { useGetFormData } from '../../hooks/useGetFormData'

import CheckboxGroup, { CustomCheckboxProps } from './components/CheckboxGroup'

const formStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
}

export type InterestForm = DomainOption & {
    [key: number]: {
        checked: boolean
    }
}

export const FormView = () => {
    const navigate = useNavigate()
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useGetFormData()

    const updateAnswersMutation = useUpdateAnswers()

    const onSubmit = handleSubmit(formData => {
        const interests = formData.interests as InterestForm

        const _interests = Object.entries(interests).map(([key, value]) => ({
            [key]: {
                isChecked: value.checked,
                label: value.label,
            },
        }))

        updateAnswersMutation.mutate({
            name: formData.name,
            mail: formData.mail,
            age: formData.age,
            interests: _interests,
        })

        navigate('/table')
    })

    return (
        <div id="form-view">
            <Box className="form-view" gap={4} sx={formStyles}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Name"
                            variant="standard"
                            onChange={onChange}
                            value={value}
                            helperText={errors.name?.message || ''}
                            error={Boolean(errors.name?.message)}
                            inputProps={{
                                'aria-invalid': !!errors.name?.message,
                            }}
                        />
                    )}
                />
                <Controller
                    name="age"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Age"
                            variant="standard"
                            onChange={onChange}
                            value={value}
                            helperText={errors.age?.message || ''}
                            error={Boolean(errors.age?.message)}
                            inputProps={{
                                'aria-invalid': !!errors.age?.message,
                            }}
                        />
                    )}
                />
                <Controller
                    name="mail"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            label="Email"
                            variant="standard"
                            onChange={onChange}
                            value={value}
                            helperText={errors.mail?.message || ''}
                            error={Boolean(errors.mail?.message)}
                            inputProps={{
                                'aria-invalid': !!errors.mail?.message,
                            }}
                        />
                    )}
                />
                <Controller
                    name="interests"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CheckboxGroup
                            id="interests-checkbox-group"
                            label="Interests"
                            helperText={errors.interests?.message || ''}
                            error={Boolean(errors.interests?.message)}
                            options={value as CustomCheckboxProps[]}
                            onChange={onChange}
                        />
                    )}
                />
                <Button
                    variant="contained"
                    disabled={!isValid}
                    onClick={onSubmit}
                    aria-disabled={!isValid}
                >
                    Submit
                </Button>
            </Box>
        </div>
    )
}
