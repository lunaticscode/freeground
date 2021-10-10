import styled, {css} from 'styled-components';
import { MainSearchProps } from '../../components/TextInput/MainSearch'

//const INPUT_DEFAULT_BORDER_COLOR = "silver";
const HEADER_BORDER_BOTTOM_COLOR: string = "#73e9e9";

interface _MainSearchWrapper {
    status: string;
}
////border-color: ${HEADER_BORDER_BOTTOM_COLOR};
export const _MainSearchWrapper = styled.div<_MainSearchWrapper>`
    margin-top:100px;
    padding:15px 0px;
    border: 1px solid #eeeeee;
    border-radius:10px;
    width:90%;
    margin-left:5%;   
    ${ props => ( props.status === "active" ) && css `
        border-color: white;
        box-shadow: 0px 0px 5px ${HEADER_BORDER_BOTTOM_COLOR}
    `}
    
`
export const _MainSearchInput = styled.input`
    display: inline-block;
    width:80%;
    margin-left:2.5%;
    font-size:15px;
    outline: none;
    border:none;
    font-weight:bold;
    //border: 1px solid silver;
    &::placeholder{
        color: silver;
    }
    
`