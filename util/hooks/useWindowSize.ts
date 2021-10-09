import {useEffect, useState} from 'react';
const useWindowSize = () => {
    const [size, setSize] = useState<number | null>(null);
    useEffect( () => {
        const updateSize = () => {
            setSize(window.innerWidth);
        };
        updateSize();
        window.addEventListener( "resize", updateSize );
        return() => window.removeEventListener( "resize", updateSize );
    }, []);
    return size;
}
export default useWindowSize;