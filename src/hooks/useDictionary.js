import { useState, useEffect } from "react";

const useDictionary = () => {
    const [dictionary, setDictionary] = useState([])
    
    useEffect(() => {
        fetch("https://api.npoint.io/d466d0c0201c804ddc43")
            .then((res) => res.json())
            .then((text) => setDictionary(Array.from(Object.keys(text))))
    }, []); 
    return dictionary
}

export default useDictionary;