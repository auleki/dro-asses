import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { FlexCol, FlexRow } from '../styles/layout.styled'
import DatePicker from './inputs/DatePicker'

const DateRange = () => {

    const { fromDate, tillDate, setFromDate, setTillDate } = useContext(GlobalContext)

    function handleFromDateInput(e: React.ChangeEvent<HTMLInputElement>) {
        setFromDate(e.target.value)
    }

    function handleTillDateInput(e: React.ChangeEvent<HTMLInputElement>) {
        setTillDate(e.target.value)
    }

    return (
        <FlexRow>
            <DatePicker
                name="fromReleaseDate"
                value={fromDate}
                onChange={handleFromDateInput}
                label="From"
            />
            <DatePicker
                name="toReleaseDate"
                value={tillDate}
                onChange={handleTillDateInput}
                label="To"
            />
        </FlexRow>
    )
}

export default DateRange