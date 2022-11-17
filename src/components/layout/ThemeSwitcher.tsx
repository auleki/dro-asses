import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ThemeSwitchButton } from '../../styles/components.styled'


const ThemeSwitcher = () => {
    const { toggleTheme, isDark } = useContext(ThemeContext)

    return (
        <ThemeSwitchButton onClick={toggleTheme}>
            {isDark
                ? <span aria-label="Light mode" role="img">🌞 Change to Light</span>
                : <span aria-label="Dark mode" role="img">🌜 Change to Dark</span>
            }
        </ThemeSwitchButton>
    )
}

export default ThemeSwitcher