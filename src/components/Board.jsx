import React, { useState } from 'react';
import Word from "./Word"

const Board = () => {
    const [active, setActive] = useState(0)
    const words = ["this", "is", "one", "more", "easter", "egg"]
    console.log(active)

    const nextWord = () => {
        setActive(active + 1)
    }

    return (
        <>
            {words.map((word, index) => 
                <Word active={index === active} nextWord={nextWord}/>
            )}
        </>
    )
}

export default Board;