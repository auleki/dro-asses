import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../components/SearchBar'

describe('searchbar tests', () => {
    it('should have placeholder text', () => {
        const searchbar = render(<SearchBar />);
        const placeholder = searchbar.getByTestId("searchbar")
        expect(placeholder).toBeInTheDocument()
    })

    // it('button should be disabled if input field is null', () => {})

    // it('search title should be visible on load', () => {})

    // it('input field should reflect the values typed in', () => {})
})