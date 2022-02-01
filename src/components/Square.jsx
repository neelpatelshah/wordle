import React, { useEffect, useState }  from 'react';
import styled from "styled-components"
import useLetterPress from '../hooks/useLetterPress';


const Letter = ({ active, setEnteredLetter, backspace }) => {
    const keyPressed = useLetterPress(active)    
    const [letter, setLetter] = useState("")

    useEffect(() => {
        if (active && keyPressed.length === 1) {
            setLetter(keyPressed.toUpperCase())
            setEnteredLetter(keyPressed.toUpperCase())
        }
    }, [keyPressed])

    useEffect(() => {
        if (backspace) {
            setLetter("")
        }
    }, [backspace])


    return <p style={styles.letter}> {letter} </p>
}

const Square = ({ active, setEnteredLetter, color, backspace }) => {
    const [squareColor, setSquareColor] = useState("")
    useEffect(() => {
        setSquareColor(color)
    }, [color])

    return (
        <SquareView style={{backgroundColor: squareColor}}> 
            <Letter active={active} setEnteredLetter={setEnteredLetter} backspace={backspace}/>
         </SquareView>
    )
}

const SquareView = styled.div`
    display: flex;
    padding: 4px;
    // Hardcoding sizes for dev speed; let's revise
    width: 100px;
    height: 100px;
    border: 1px solid #c4c8cc;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px
`

const styles = {
    letter: {
        fontSize: 80,
        fontFamily: "Quicksand"
    } 
}

export default Square;