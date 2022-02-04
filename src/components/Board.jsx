import React, { useState, useEffect } from 'react';
import Word from "./Word"
import useEnterPress from '../hooks/useEnterPress';
import useBackspacePress from '../hooks/useBackspacePress';
import useLetterPress from '../hooks/useLetterPress';
import useDictionary from '../hooks/useDictionary';

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

const Board = ({ wordOfTheDay, input, clearInput, height, width }) => {
    // make these detectable in hook so i can clear it
    const [enter, setEnter] = useState(false)
    const [backspace, setBackspace] = useState(false)
    const [keyPressed, setKeyPressed] = useState("")
    useEnterPress(setEnter)
    useBackspacePress(setBackspace)
    useLetterPress(setKeyPressed)
    const dictionary = useDictionary() 
    const [activeWord, setActiveWord] = useState(0)
    const [activeLetter, setActiveLetter] = useState(0)
    const [colors, setColors] = useState(colorGrid)
    const [guesses, setGuesses] = useState(guessGrid)
    const [word, setWord] = useState([])
    const [showMispelled, setShowMispelled] = useState(false)
    const words = ["this", "is", "one", "more", "easter", "egg"]

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
        setEnter(false)
    }, [enter])

    useEffect(() => {
        handleKeyPress(keyPressed)
        setKeyPressed("")
    }, [keyPressed])

    useEffect(() => {
        if (backspace) {
            handleBackspace(backspace)
        }
        setBackspace(false)
    }, [backspace])

    const checkWord = (guess) => {
        const guessLetters = guess.map((letter) => letter.toLowerCase())
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
            const guess = guesses[activeWord]
            console.log(dictionary)
            if (dictionary.includes(guess.join("").toLowerCase())) {
                const correct = checkWord(guess)
                const temp = colors
                temp[activeWord] = correct
                setColors(temp)
                setActiveWord(activeWord + 1)
                setActiveLetter(0)
            } else {
                setShowMispelled(true)
            }
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
        setShowMispelled(false)
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
                    height={height}
                    width={width}
                />
            )}
            {showMispelled && <p> not a word stupid </p>}
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