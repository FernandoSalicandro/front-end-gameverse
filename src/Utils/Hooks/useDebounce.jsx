import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  
    const [debounceValue, setDebounceValue] = useState('');

    useEffect(() => {

        let timer = setTimeout(() => {
            
            setDebounceValue(value);

        }, delay);


        return () => clearTimeout(timer);

    }, [value,delay])


    return debounceValue;

}

export default useDebounce