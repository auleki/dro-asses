import React from 'react'
import { ButtonSC } from '../../styles/common.styled'
import { ButtonProps } from '../../types/common'

const Button = ({ text, onClick, icon, isLoading, disabled }: ButtonProps) => {
    return (
        <ButtonSC onClick={onClick} disabled={disabled}>
            {isLoading ? '...' : text || icon}
        </ButtonSC>
    )
}

export default Button