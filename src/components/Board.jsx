import React, { useState, useEffect } from 'react';
import Word from "./Word"
import useEnterPress from '../hooks/useEnterPress';
import useBackspacePress from '../hooks/useBackspacePress';
import useLetterPress from '../hooks/useLetterPress';

const colorGrid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

const guessGrid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

const Board = ({ wordOfTheDay }) => {
    const enter = useEnterPress()
    const backspace = useBackspacePress()
    const keyPressed = useLetterPress() 
    const [activeWord, setActiveWord] = useState(0)
    const [activeLetter, setActiveLetter] = useState(0)
    const [colors, setColors] = useState(colorGrid)
    const [guesses, setGuesses] = useState(guessGrid)
    const [word, setWord] = useState([])
    const words = ["this", "is", "one", "more", "easter", "egg"]

    useEffect(() => {
        setWord(Array.from(wordOfTheDay.toLowerCase()))
    }, [])
    
    useEffect(() => {
        if (activeLetter > 4) {
            const correct = checkWord()
            const temp = colors
            temp[activeWord] = correct
            setColors(temp)
            setActiveWord(activeWord + 1)
            setActiveLetter(0)
        }
    }, [enter])

    useEffect(() => {
        if (keyPressed.length === 1) {
            if (activeLetter <= 4) {
                setActiveLetter(activeLetter + 1)
                const temp = guesses[activeWord]
                temp[activeLetter] = keyPressed.toUpperCase()
                const temp2 = guesses
                temp2[activeWord] = temp
                setGuesses(temp2)
            }
        }
    }, [keyPressed])

    useEffect(() => {
        if (word.length && backspace) {
            const temp = guesses[activeWord]
            temp.pop()
            const temp2 = guesses
            temp2[activeWord] = temp
            setGuesses(temp2)
            setActiveLetter(activeLetter - 1)
        }
    }, [backspace])

    const checkWord = () => {
        const guessLetters = guesses[activeWord].map((letter) => letter.toLowerCase())
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
            {words.map((_, index) => 
                <Word 
                    word={guesses[index]}
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