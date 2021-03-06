import React, { useEffect, useState }  from 'react';
import styled from "styled-components"
import { isMobile } from "react-device-detect"


const Letter = ({ letter, size }) => {
    return <p style={{fontSize: size, fontFamily: "Quicksand", fontWeight: "lighter"}}> {letter} </p>
}

const Square = ({ letter, color, height, width }) => {
    const [squareColor, setSquareColor] = useState("")
    let squareSide;
    if (isMobile) {
        squareSide = parseInt(width/6)-12
    } else {
        squareSide = parseInt(height/6)
    }
    const fontSize = parseInt(squareSide * 0.75)
    useEffect(() => {
        setSquareColor(color)
    }, [color])

    return (
        <SquareView style={{
            backgroundColor: squareColor,
            height: squareSide,
            width: squareSide
        }}> 
            <Letter letter={letter} size={fontSize}/>
         </SquareView>
    )
}

const SquareView = styled.div`
    display: flex;
    padding: 4px;
    margin: 5px;
    // Hardcoding sizes for dev speed; let's revise
    border: 1px solid #c4c8cc;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export default Square;