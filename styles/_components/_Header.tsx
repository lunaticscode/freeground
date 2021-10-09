import styled, {css} from 'styled-components';

const HEADER_BACKGROUND_COLOR:string = "#4e4e4e";
const HEADER_BORDER_BOTTOM_COLOR: string = "#73e9e9";
const TITLE_TEXT_COLOR:string = "#ececec";
const TITLE_WEIGHT:number = 600; 

export const _HeaderLayout = styled.div`
    width: 100%;
    padding:20px;
    background-color: ${HEADER_BACKGROUND_COLOR};
    border-bottom-color: ${HEADER_BORDER_BOTTOM_COLOR};
    border-left: 4px solid ${HEADER_BACKGROUND_COLOR};
    border-right: 4px solid ${HEADER_BACKGROUND_COLOR};
    border-bottom: 1px solid ${HEADER_BORDER_BOTTOM_COLOR};
    box-shadow: 0px 5px 3px ${HEADER_BORDER_BOTTOM_COLOR};
`