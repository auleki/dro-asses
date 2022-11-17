import React from 'react'
import { LogoTitleSC, NavbarSC } from '../../styles/layout.styled'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
    return (
        <NavbarSC>
            <LogoTitleSC>DRO Health</LogoTitleSC>
            <ThemeSwitcher />
        </NavbarSC>
    )
}

export default Navbar