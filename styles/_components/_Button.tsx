import styled, {css} from 'styled-components';

const HEADER_BACKGROUND_COLOR:string = "#4e4e4e";
const HEADER_BORDER_BOTTOM_COLOR: string = "#73e9e9";
const TITLE_TEXT_COLOR:string = "#ececec";
const BUTTON_PRIMARY_COLOR = "#73e9e9";
const BUTTON_DANGER_COLOR = "#ed2355";
const TITLE_WEIGHT:number = 600; 

interface CustomButtonProps {
    status?: string;
    size?: string;
    disabled?: boolean;
}
export const _Button = styled.div<CustomButtonProps>`
    display: inline-block;
    border-radius: 10px;
    padding:7px 15px;
    color: silver;
    border: 1px solid silver;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 2px ${HEADER_BORDER_BOTTOM_COLOR};
        color: ${HEADER_BORDER_BOTTOM_COLOR};
        border-color: ${HEADER_BORDER_BOTTOM_COLOR};
    }

    ${ props => ( props.status === "primary" ) && css `
        background-color: ${BUTTON_PRIMARY_COLOR};
        border-color: ${BUTTON_PRIMARY_COLOR};
        color: white;
        border: 1px solid ${BUTTON_PRIMARY_COLOR};
        &:hover {
            box-shadow: 0px 0px 2px ${BUTTON_PRIMARY_COLOR};
            color: white;
            border-color: ${BUTTON_PRIMARY_COLOR};
        }
    `}

    ${ props => ( props.status === "danger" ) && css `
        background-color: ${BUTTON_DANGER_COLOR};
        border-color: ${BUTTON_DANGER_COLOR};
        color: ${TITLE_TEXT_COLOR};
        border: 1px solid ${BUTTON_DANGER_COLOR};
        &:hover {
            box-shadow: 0px 0px 2px ${BUTTON_DANGER_COLOR};
            color: ${TITLE_TEXT_COLOR};
            border-color: ${BUTTON_DANGER_COLOR};
        }
    `}
    
`