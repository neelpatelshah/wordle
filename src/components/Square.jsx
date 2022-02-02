import React, { useEffect, useState }  from 'react';
import styled from "styled-components"


const Letter = ({ letter }) => {
    return <p style={styles.letter}> {letter} </p>
}

const Square = ({ letter, color }) => {
    const [squareColor, setSquareColor] = useState("")
    useEffect(() => {
        setSquareColor(color)
    }, [color])

    return (
        <SquareView style={{backgroundColor: squareColor}}> 
            <Letter letter={letter}/>
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