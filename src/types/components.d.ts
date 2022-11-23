import { ChangeEvent } from "react"

export type AuthorsProps = {
    authors: object[]
}

export type AuthorProps = {
    author: any
}

export type DatePickerProps = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
    label: string
}