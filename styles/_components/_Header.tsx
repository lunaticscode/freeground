import styled, {css} from 'styled-components';

const HEADER_BACKGROUND_COLOR:string = "#4e4e4e";
const HEADER_BORDER_BOTTOM_COLOR: string = "#73e9e9";
const TITLE_TEXT_COLOR:string = "#ececec";
const TITLE_WEIGHT:number = 600; 

export const _HeaderWrapper = styled.div`
    width: 100%;
    height:80px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    background-color: ${HEADER_BACKGROUND_COLOR};
    border-bottom-color: ${HEADER_BORDER_BOTTOM_COLOR};
    border-left: 4px solid ${HEADER_BACKGROUND_COLOR};
    border-right: 4px solid ${HEADER_BACKGROUND_COLOR};
    border-bottom: 1px solid ${HEADER_BORDER_BOTTOM_COLOR};
    box-shadow: 0px 3px 2px ${HEADER_BORDER_BOTTOM_COLOR};
`
export const _HeaderContentLayout = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`