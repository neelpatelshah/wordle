import { useState, useEffect } from "react";

// credit - https://usehooks.com/useKeyPress/
function useLetterPress(setKeyPressed) {
    // State for keeping track of whether key is pressed
    // const [keyPressed, setKeyPressed] = useState("");
    // const [capitalize, setCapitalze] = useState(true)
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key.length === 1 && key.match(/[a-z]/i)) {
            setKeyPressed(key.toUpperCase())
        }  
        // if (key === keyPressed) {
        //     setCapitalze(false)
        // }
    }

    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, []); 
    //return keyPressed
}

export default useLetterPress;