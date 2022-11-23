import React from 'react'
import { LogoTitleSC, NavbarSC } from '../../styles/layout.styled'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
    return (
        <NavbarSC>
            <LogoTitleSC>DRO HEALTH</LogoTitleSC>
            <ThemeSwitcher />
        </NavbarSC>
    )
}

export default Navbar