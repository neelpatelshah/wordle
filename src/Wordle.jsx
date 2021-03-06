import React, { useState } from 'react';
import Board from "./components/Board";
import Keyboard from './components/Keyboard';
import { isMobile } from "react-device-detect"

const Wordle = ({ dimensions }) => {
    const { height, width} = dimensions
    const boardHeight = isMobile ? parseInt((height - 150) * 0.7) : height - 250
    const keyboardHeight = (height - 250) - boardHeight

    const [input, setInput] = useState("")

    const handleKeyEvent = (type, key) => {
        if (type === "letter") {
            setInput(key)
        } else {
            setInput(type)
        }
    }

    const clearInput = () => {
        setInput("")
    }

    return (
        <div>
            <>
                <Board 
                    wordOfTheDay="float" 
                    input={input} 
                    clearInput={clearInput} 
                    height={boardHeight} 
                    width={width}
                />
            </>
            {isMobile && <>
                <Keyboard 
                    setKeyEvent={handleKeyEvent} 
                    height={keyboardHeight}
                    width={width}
                />
            </>}
        </div>
    )
}

export default Wordle;