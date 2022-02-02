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

const Board = ({ wordOfTheDay, input, clearInput }) => {
    // make these detectable in hook so i can clear it
    const enter = useEnterPress()
    const backspace = useBackspacePress()
    const keyPressed = useLetterPress() 
    const [activeWord, setActiveWord] = useState(0)
    const [activeLetter, setActiveLetter] = useState(0)
    const [colors, setColors] = useState(colorGrid)
    const [guesses, setGuesses] = useState(guessGrid)
    const [word, setWord] = useState([])
    const words = ["this", "is", "one", "more", "easter", "egg"]

    console.log(guesses)

    useEffect(() => {
        setWord(Array.from(wordOfTheDay.toLowerCase()))
    }, [])

    useEffect(() => {
        if (input === "backspace") {
            handleBackspace()
        } else if (input === "enter") {
            handleEnter()
        } else {
            handleKeyPress(input)
        }
        clearInput()
    }, [input])
    
    useEffect(() => {
        handleEnter()
    }, [enter])

    useEffect(() => {
        handleKeyPress(keyPressed)
    }, [keyPressed])

    useEffect(() => {
        if (backspace) {
            handleBackspace(backspace)
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

    const handleEnter = () => {
        if (activeLetter === 5) {
            const correct = checkWord()
            const temp = colors
            temp[activeWord] = correct
            setColors(temp)
            setActiveWord(activeWord + 1)
            setActiveLetter(0)
        }
    }

    const handleBackspace = () => {
        const i = activeLetter ? activeLetter - 1 : 0
        const temp = guesses[activeWord]
        temp[i] = ""
        const temp2 = guesses
        temp2[activeWord] = temp
        setGuesses(temp2)
        if (activeLetter) {
            setActiveLetter(activeLetter - 1)
        }
    }

    const handleKeyPress = (key) => {
        if (key.length === 1) {
            if (activeLetter <= 4) {
                const temp = guesses[activeWord]
                temp[activeLetter] = key.toUpperCase()
                const temp2 = guesses
                temp2[activeWord] = temp
                setGuesses(temp2)
                setActiveLetter(activeLetter + 1)
                if (activeLetter > 4) {
                    setActiveLetter(4)
                }
            }
        }
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