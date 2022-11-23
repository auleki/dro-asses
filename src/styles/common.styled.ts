import styled from 'styled-components'
import { SpanProps } from '../types/styled'
import { colors, metrics } from '../utils/constant.utils'

export const Span = styled.span<SpanProps>`
    color: ${props => props.color || 'inherit'};
`

export const ButtonSC = styled.button`
    padding: .7rem 2rem;
    border-radius: ${metrics.borderRadius};
    border: none;
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.buttonBg};
    cursor: pointer;
    font-family: inherit;

    &:disabled {
        background: linear-gradient(35deg, rgb(230, 230, 230), rgb(215, 215, 215));
        color: #333;
        cursor: not-allowed;
    }
`

export const CardSC = styled.div`
    background-color: ${(props) => props.theme.cardBg};
    outline: 2px solid transparent;
    display: inline-flex;
    flex-direction: column;
    border-radius: ${metrics.borderRadius};
    width: 400px;
    border-radius: 16px;
    backdrop-filter: blur(16.6px);
    -webkit-backdrop-filter: blur(8.6px);
    padding: 1rem; 
    transition: outline 100ms ease-out;
    color: ${(props) => props.theme.cardText};

    &:hover {
        outline-color: ${colors.primary.yellow};
    }
`

export const AuthorSC = styled.section`
    background-color: ${(props) => props.theme.authorTagBg};
    padding: .3rem 1rem;
    display: inline-flex; 
    font-size: .8rem;
    border-radius: 50px;
    color: ${(props) => props.theme.authorTagText};
`

export const AuthorsSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    .authors {
        display: flex; 
        gap: .5rem;
        flex-wrap: wrap;
    }
`

export const CardsSC = styled.ul`
    overflow-y: auto;
    display: flex;
    width: 100%;
    // outline: 2px solid crimson;
    flex-wrap: wrap;
    list-type: none;
    gap: 1rem;
    justify-content: space-between;
    row-gap: 3rem;
`
