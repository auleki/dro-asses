import styled from "styled-components";
import {motion} from 'framer-motion'
import { fonts, metrics, colors } from "../utils/constant.utils";
import { AppContainerProps } from "../types/layout";

export const PageContainer = styled.main`
    background: ${(props) => props.theme.bgGradient};
    background-size: cover;
    min-height: 100vh;
`

export const AppContainer = styled.div<AppContainerProps>`
    font-family: ${fonts.paragraph};
    padding: 2rem;
    overflow-y: auto;
`

export const SearchBarSC = styled(motion.form)`
    display: inline-flex;
    background-color: ${(props) => props.theme.cardBg};
    padding: 1rem;
    gap: .5rem;
    box-shadow: 4px 4px 30px 10px rgba(0, 0, 0, 0.2);
    border-radius: ${metrics.borderRadius};
`

export const SearchInputSC = styled.input`
    outline: none;
    border: none;
    padding: 1rem 1rem 1rem 1rem;
    background: transparent;
    font-size: ${metrics.fontNormal};
    color: ${(props) => props.theme.searchBarText};
    font-family: inherit;
    border-radius: ${metrics.borderRadius};
`

export const SelectInputSC = styled.select`
    padding: .6rem .6rem .8rem .6rem;
    background: transparent;
    font-family: inherit;
    color: ${colors.primary.black};
    outline: none;
    border: none;
    width: 150px;
`