import styled, {css} from 'styled-components';
import { HEADER_STYLE } from '../_styles_config';

export const _HeaderWrapper = styled.div`
    width: 100%;
    height: ${ HEADER_STYLE.HEIGHT_NUMBER + "px" };
    padding: 0px 10px;
    display: flex;
    align-items: center;
    background-color: ${HEADER_STYLE.BACKGROUND_COLOR};
    border-bottom: 2px solid ${HEADER_STYLE.BOTTOM_LINE_COLOR};
    box-shadow: 0px 2px 5px ${HEADER_STYLE.BOTTOM_LINE_COLOR};
`
export const _HeaderContentLayout = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`