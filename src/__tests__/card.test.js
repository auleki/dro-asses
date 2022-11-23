import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '../components/common/card/Card'
import Author from '../components/common/card/Author'

describe('card tests', () => {
    it('should have publisher data', () => {
        const card = render(<Card />)
        const publisher = card.getByTitle('publisher')
        expect(publisher).toBeInTheDocument()
    })

    it("should have isbn data", () => {
        const card = render(<Card />)
        const isbn = card.getByTitle('isbn')
        expect(isbn).toBeInTheDocument()
    })
    it("should have release date data", () => {
        const card = render(<Card />)
        const releaseDate = card.getByTitle('release-date')
        expect(releaseDate).toBeInTheDocument()
    })
    it("should have authors data", () => {
        const authorCard = render(<Author />)
        const author = authorCard.getByTitle('author')
        expect(author).toBeInTheDocument()
    })
    it("should have title data", () => {
        const card = render(<Card />)
        const title = card.getByTitle('book-title')
        expect(title).toBeInTheDocument()
    })
})