import {
    Box,
    Checkbox,
    FormControlLabel,
    InputLabel,
    CheckboxProps,
    FormHelperText,
    FormControl,
} from '@mui/material'
import React from 'react'

const optionsStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export type CustomCheckboxProps = CheckboxProps & {
    id: string
    label?: string
}

type CheckboxGroupProps = Partial<{
    id: string
    label: string
    helperText: string
    error: boolean
    options: Array<CustomCheckboxProps>
    onChange: (options: Array<CustomCheckboxProps>) => void
}>

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    id,
    label,
    helperText,
    error = false,
    options = [],
    onChange = () => null,
}) => {
    const internalOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const changedOptions = options.map(option =>
            option.id === event.target.id
                ? { ...option, checked: event.target.checked }
                : option,
        )
        onChange(changedOptions)
    }

    const checkboxGroupId = id ?? ''

    return (
        <div id={checkboxGroupId} className="checkbox-group">
            <InputLabel id={checkboxGroupId} error={error}>
                {label}
            </InputLabel>
            <FormControl component="fieldset" error={error}>
                <Box sx={optionsStyle}>
                    {options.map(
                        ({ id, label, checked = false, ...option }) => (
                            <FormControlLabel
                                key={id || ''}
                                label={label}
                                control={
                                    <Checkbox
                                        {...option}
                                        id={id || ''}
                                        checked={checked}
                                        onChange={internalOnChange}
                                        color={error ? 'error' : 'primary'}
                                    />
                                }
                            />
                        ),
                    )}
                </Box>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        </div>
    )
}

export default CheckboxGroup
