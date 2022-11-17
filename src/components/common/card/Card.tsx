import React from 'react'
import { CardSC } from '../../../styles/common.styled'
import { FlexCol, FlexRow, Title } from '../../../styles/layout.styled'
import Authors from './Authors'

const Card = ({ book }: any) => {
    const { name, publisher, isbn, released, authors } = book

    return (
        <CardSC>
            <FlexCol>
                <span>Publisher</span>
                <span>{publisher || "-"}</span>
            </FlexCol>
            <Title>
                {name || "-"}
            </Title>
            <Authors authors={authors} />
            <FlexRow justifyContent='space-between'>
                <FlexCol>
                    <span>ISBN</span>
                    <span>{isbn || "-"}</span>
                </FlexCol>
                <FlexCol>
                    <span>Released On</span>
                    <span>{new Date(released).toDateString() || "-"}</span>
                </FlexCol>
            </FlexRow>
        </CardSC>
    )
}

export default Card