import styled from "styled-components";
import {motion} from 'framer-motion'
import { fonts, metrics } from "../utils/constant.utils";
import { AppContainerProps } from "../types/layout";
import { CardSC } from "./common.styled";

export const PageContainer = styled.main`
    background: ${(props) => props.theme.bgGradient};
    background-size: cover;
    min-height: 100vh;
`

export const ContainerSC = styled.section`
    width: 100%;
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
`


export const CardsContainer = styled(CardSC)`
    width: 100%;
    // outline: 2px solid crimson;
    gap: 1rem;
    row-gap: 3rem;
    display: grid;
    background: transparent;
    grid-template-columns: repeat(1, 6fr);
    place-items: center;

    @media (min-width: 920px) {
        grid-template-columns: repeat(2, 6fr);
    }

    @media (min-width: 1328px) {
        grid-template-columns: repeat(3, 4fr);
    }
`

export const FullPageContainer = styled.div`
    height: 50vh;
    display: inline-flex;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
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
    margin: 2rem auto;
    gap: .5rem;
    align-items: center;
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
    color: ${props => props.theme.cardText};
    outline: none;
    border: none;
    width: 150px;
`

export const ThemeSwitchButton = styled.span`
    cursor: pointer;
    color: ${(props) => props.theme.searchBarText};
    &:hover {
        opacity: .4;
    }
`

export const SearchSectionSC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0 4rem;
    height: 40vh;
    text-align: center;
`