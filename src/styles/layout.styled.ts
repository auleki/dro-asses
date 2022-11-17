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
`