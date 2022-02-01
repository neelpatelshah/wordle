import { useState, useEffect } from "react";

// credit - https://usehooks.com/useKeyPress/
function useLetterPress(active) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState("");
    const [capitalize, setCapitalze] = useState(true)
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key.length === 1 && key.match(/[a-z]/i)) {
            setKeyPressed(key)
        }  
        if (key === keyPressed) {
            setCapitalze(false)
        }
    }

    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, [active]); 
    return capitalize ? 
        keyPressed.toUpperCase()
        : keyPressed
}

export default useLetterPress;