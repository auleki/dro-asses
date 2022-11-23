import React from 'react'
import { FlexCol } from '../../styles/layout.styled'
import { DatePickerProps } from '../../types/components'

const DatePicker = ({ value, onChange, label, name }: DatePickerProps) => {
    return (
        <FlexCol>
            <label htmlFor={name}>{label}</label>
            <input
                type="date"
                value={value}
                onChange={onChange}
            />
        </FlexCol>
    )
}

export default DatePicker