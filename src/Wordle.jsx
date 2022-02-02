import React, { useState } from 'react';
import Board from "./components/Board";
import Keyboard from './components/Keyboard';
import { isMobile } from "react-device-detect"

const Wordle = () => {

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
                <Board wordOfTheDay="union" input={input} clearInput={clearInput}/>
            </>
            {isMobile && <>
                <Keyboard setKeyEvent={handleKeyEvent}/>
            </>}
        </div>
    )
}

const style = {
    display: "flex",
    flexDirection: "row"
}

export default Wordle;