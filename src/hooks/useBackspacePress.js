import { useState, useEffect } from "react";

// credit - https://usehooks.com/useKeyPress/
function useBackspacePress() {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
        if (key === "Backspace") {
            setKeyPressed(true)
        }
    }
    function uphandler({ key }) {
        if (key === "Backspace") {
            setKeyPressed(false)
        }
    }
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", uphandler)
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", uphandler)
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}

export default useBackspacePress;