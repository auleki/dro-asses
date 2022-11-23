import React from 'react'
import { ButtonSC } from '../../styles/common.styled'
import { ButtonProps } from '../../types/common'
import Loading from '../loaders/Loading'

const Button = ({ text, onClick, icon, isLoading, disabled }: ButtonProps) => {
    return (
        <ButtonSC onClick={onClick} disabled={disabled}>
            {isLoading ? <Loading size={15} /> : text || icon}
        </ButtonSC>
    )
}

export default Button