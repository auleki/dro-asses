import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ThemeSwitchButton } from '../../styles/components.styled'


const ThemeSwitcher = () => {
    const { toggleTheme, isDark } = useContext(ThemeContext)

    return (
        <ThemeSwitchButton onClick={toggleTheme}>
            {isDark
                ? <span aria-label="Light mode" role="img">🌞 Light Mode</span>
                : <span aria-label="Dark mode" role="img">🌜 Dark Mode</span>
            }
        </ThemeSwitchButton>
    )
}

export default ThemeSwitcher