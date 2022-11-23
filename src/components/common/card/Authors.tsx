import React from 'react'
import { AuthorsSection } from '../../../styles/common.styled'
import { AuthorsProps } from '../../../types/components'
import Author from './Author'

const Authors = ({ authors }: AuthorsProps) => {
    return (
        <AuthorsSection>
            <h4>Authors</h4>
            <div className='authors'>
                {authors?.map((author, idx) => <Author key={idx} author={author} />)}
            </div>
        </AuthorsSection>
    )
}

export default Authors