import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../components/SearchBar'

describe('searchbar tests', () => {
    it('should have placeholder text', () => {
        const searchbar = render(<SearchBar />);
        const placeholder = searchbar.getByPlaceholderText('search by ISNB, author, date...')
        expect(placeholder).toBeInTheDocument()
    })
})