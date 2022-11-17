import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


const ThemeSwitcher = () => {
    const { toggleTheme, isDark } = useContext(ThemeContext)

    return (
        <span onClick={toggleTheme}>
            {isDark
                ? <span aria-label="Light mode" role="img">🌞 Bring Light</span>
                : <span aria-label="Dark mode" role="img">🌜 Bring Dark</span>
            }
        </span>
    )
}

export default ThemeSwitcher