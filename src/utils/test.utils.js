
import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { appTheme } from '../utils/constant.utils'

const AllProviders = ({ children }) => {
    return (
        <ThemeProvider theme={appTheme.light}>
            {children}
        </ThemeProvider>
    )
}

const customRender = (
    ui,
    options
) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }