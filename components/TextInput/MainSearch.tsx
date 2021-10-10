import React, {useEffect, useState} from 'react';
import { _MainSearchInput, _MainSearchWrapper } from '../../styles/_components/_TextInput'
export interface MainSearchProps {
    placeholder?: string;
    searchKeyword: ( keyword: string ) => void;
}

export const MainSearch:React.FC<MainSearchProps> = ({ placeholder="검색어 입력", searchKeyword }) => {

    const [ inputWord, setInputWord ] = useState<string | null | undefined>("");
    const [ nowStatus, setStatus] = useState<string>("");
    
    const onSearchKeyword = () => { 
        if( inputWord && inputWord.length > 0 ){
            searchKeyword( inputWord as string) 
        }
    }
    
    const searchInputChange = ( e: any ) => {
        const inputValue = e.target.value;
        
        //console.log(keycode);
        setInputWord(inputValue);
        
        if( inputValue && inputValue.length > 0 ){
            setStatus("active");
            return;
        }else{
            setStatus("");
        }
      
    }

    return (
        <_MainSearchWrapper
            status={nowStatus}
        >
        <_MainSearchInput
            placeholder={placeholder}
            onChange={searchInputChange}
            onKeyPress={( e:any ) => { if( (e.key).toString().toLowerCase() === 'enter') { onSearchKeyword() } }}
        />  
        </_MainSearchWrapper>
    )
}
