import React from 'react'
import { CardSC, Span } from '../../../styles/common.styled'
import { FlexCol, FlexRow, Title } from '../../../styles/layout.styled'
import { colors } from '../../../utils/constant.utils'
import Authors from './Authors'

const Card = ({ book }: any) => {

    // console.log("🚀 ~ file: Card.tsx ~ line 26 ~ Card ~ book?.released", new Date(book?.released).toISOString().split("T")[0])

    return (
        <CardSC>
            <FlexCol>
                <Span color={colors.primary.gray}>Publisher</Span>
                <span title='publisher'>{book?.publisher || "-"}</span>
            </FlexCol>
            <Title title='book-title'>
                {book?.name || "No Title"}
            </Title>
            <Authors authors={book?.authors} />
            <FlexRow justifyContent='space-between'>
                <FlexCol>
                    <Span color={colors.primary.gray}>ISBN</Span>
                    <span title='isbn'>{book?.isbn || "-"}</span>
                </FlexCol>
                <FlexCol>
                    <Span color={colors.primary.gray} className='rtl'>Released On</Span>
                    <span title="release-date" className='rtl'>{new Date(book?.released).toDateString() || "-"}</span>

                </FlexCol>
            </FlexRow>
        </CardSC>
    )
}

export default Card