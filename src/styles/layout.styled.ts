import styled from "styled-components";
import { FlexRowProps } from "../types/layout";
import { metrics } from "../utils/constant.utils";

export const FlexRow = styled.div<FlexRowProps>`
    display: flex;
    flex-wrap: wrap;
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