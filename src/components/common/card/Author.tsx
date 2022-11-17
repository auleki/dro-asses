import React from 'react'
import { AuthorSC } from '../../../styles/common.styled'
import { AuthorProps } from '../../../types/components'

const Author = ({ author }: AuthorProps) => <AuthorSC>{author || "-"}</AuthorSC>

export default Author