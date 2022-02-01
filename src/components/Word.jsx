import React, { useState, useEffect } from 'react';
import Square from "./Square"

const Word = ({ active, nextWord, setGuess, colors }) => {
    const [enteredLetter, setEnteredLetter] = useState("")
    const [currentLetter, setCurrentLetter] = useState(0)
    const [word, setWord] = useState("")
    const letters = ["this", "is", "an", "easter", "egg"]

    if (active) console.log(word)

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

    // useEffect(() => {
    //     if (word.length === 5) {
    //         setGuess(word)
    //         nextWord()
    //         setWord("")
    //     }
    // }, [enter])

    return (
        <div style={styles.row}>
            {letters.map((letter, index) => 
                <Square 
                    active={active && currentLetter === index} 
                    setEnteredLetter={setEnteredLetter}
                    color={colors[index]}
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