import React, {useEffect, useState} from "react";
import { MainSearch } from '../components/TextInput/MainSearch';
const Home:React.FC = () => {
    const searchKeyword = ( keyword: string ) => {
        console.log(keyword);
        /**
         * TODO ::: Fetch image-list for this ${keyword}
         */
    }
    return (
        <>
            <MainSearch
                searchKeyword={searchKeyword}
            />
        </>
    )
}

export default Home;