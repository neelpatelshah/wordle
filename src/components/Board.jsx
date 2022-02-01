import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Word from "./Word"
import useEnterPress from '../hooks/useEnterPress';

const colorGrid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

const Board = ({ wordOfTheDay }) => {
    const enter = useEnterPress()
    const [active, setActive] = useState(0)
    const [guess, setGuess] = useState("")
    const [colors, setColors] = useState(colorGrid)
    const [word, setWord] = useState([])
    const words = ["this", "is", "one", "more", "easter", "egg"]

    React.useEffect(() => {
        setWord(Array.from(wordOfTheDay.toLowerCase()))
    }, [])
    
    useEffect(() => {
        if (guess.length === 5) {
            const correct = checkWord()
            const temp = colors
            temp[active] = correct
            setColors(temp)
            nextWord()
        }
    }, [enter])

    const nextWord = () => {
        setActive(active + 1)
        setGuess("")
    }

    const checkWord = () => {
        const guessLetters = Array.from(guess.toLowerCase())
        const correctness = []
        for (let i = 0; i < 5; i += 1) {
            if (guessLetters[i] === word[i]) {
                correctness.push(1)
            } else if (word.includes(guessLetters[i])) {
                correctness.push(2)
            } else {
                correctness.push(0)
            }
        }
        return correctness;
    }

    return (
        <>
            {words.map((word, index) => 
                <Word 
                    active={index === active} 
                    nextWord={nextWord}
                    setGuess={setGuess}
                    colors={mapColors(colors[index])}
                />
            )}
        </>
    )
}

const mapColors = (colors) => 
    colors.map(color => {
        if (color === 0) {
            return "red"
        } else if (color === 1) {
            return "green"
        } else if (color === 2) {
            return "yellow"
        } else {
            return "";
        }
    })

export default Board;