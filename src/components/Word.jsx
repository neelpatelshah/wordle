import React, { useState, useEffect } from 'react';
import useEnterPress from '../hooks/useEnterPress';
import Square from "./Square"

const Word = ({ active, nextWord }) => {
    const [enteredLetter, setEnteredLetter] = useState("")
    const [currentLetter, setCurrentLetter] = useState(0)
    const [word, setWord] = useState("")
    const letters = ["this", "is", "an", "easter", "egg"]
    const enter = useEnterPress()

    if (active) console.log(word)

    useEffect(() => {
        if (enteredLetter.length === 1) {
            if (word.length <= 5) {
                setCurrentLetter(currentLetter + 1)
                setWord(`${word}${enteredLetter}`)
                setEnteredLetter("")
            }
        }
    }, [enteredLetter])

    useEffect(() => {
        if (word.length === 5) {
            nextWord()
            setWord("")
        }
    }, [enter])

    return (
        <div style={styles.row}>
            {letters.map((letter, index) => 
                <Square 
                    active={active && currentLetter === index} 
                    setEnteredLetter={setEnteredLetter}
                />
            )}
        </div>
    )
}

const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
}

export default Word;