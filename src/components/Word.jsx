import React, { useState, useEffect } from 'react';
import useBackspacePress from '../hooks/useBackspacePress';
import Square from "./Square"

const Word = ({ active, nextWord, setGuess, colors }) => {
    const backspace = useBackspacePress()
    const [enteredLetter, setEnteredLetter] = useState("")
    const [currentLetter, setCurrentLetter] = useState(0)
    const [word, setWord] = useState("")
    const letters = ["this", "is", "an", "easter", "egg"]

    useEffect(() => {
        if (enteredLetter.length === 1) {
            if (word.length <= 5) {
                setCurrentLetter(currentLetter + 1)
                setWord(`${word}${enteredLetter}`)
                setGuess(`${word}${enteredLetter}`)
                setEnteredLetter("")
            }
        }
    }, [enteredLetter])

    useEffect(() => {
        if (word.length && backspace) {
            const backspacedWord = word.slice(0, word.length-1)
            setWord(backspacedWord)
            setGuess(backspacedWord)
            setCurrentLetter(currentLetter - 1)
            setEnteredLetter("")
            console.log(backspacedWord)
        }
    }, [backspace])

    return (
        <div style={styles.row}>
            {letters.map((letter, index) => 
                <Square 
                    active={active && currentLetter === index} 
                    setEnteredLetter={setEnteredLetter}
                    color={colors[index]}
                    backspace={backspace}
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