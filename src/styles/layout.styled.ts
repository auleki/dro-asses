import styled from "styled-components";
import { FlexRowProps } from "../types/layout";
import { metrics } from "../utils/constant.utils";

export const FlexRow = styled.div<FlexRowProps>`
    display: flex;
    width: 100%;
    justify-content: ${({justifyContent}) => justifyContent || 'inherit'};
    gap: ${({gap}) => gap || 0}rem;
`

export const FlexCol = styled(FlexRow)`
    flex-direction: column;
`

export const Title = styled.h2`
    font-size: ${metrics.fontBig};
    margin: 2rem 0;
`

export const FooterSC = styled.div`
    text-align: center;
    margin-top: 1rem;
    .le_creatau {
        background: #fff;
        padding: .2rem .4rem;
        border-radius: 5px;
    }
`

export const NavbarSC = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const LogoTitleSC = styled.h1`
    font-size: 1.5rem;
    color: ${(props) => props.theme.searchBarText};
`

export const PageTitle = styled.h2`
    font-size: 3rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: .3rem;
    color: ${(props) => props.theme.searchBarText}
`

export const HeaderSC = styled.main`
    height: 40vh;
`