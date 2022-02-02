import React from 'react';
import Button from './Button';


const Keyboard = ({ setKeyEvent }) => {

    const handlePress = (key) => {
        if (key.match(/[A-Z]/i)) {
            setKeyEvent("letter", key)
        } else if (key === "↳") {
            setKeyEvent("enter", key)
        } else if (key === "<") {
            setKeyEvent("backspace", key)
        }
    }

    return (
        rows.map((row) => 
            <div style={styles.row}>
                {row.map((key) => 
                <Button onClick={() => handlePress(key)}>{key}</Button>
            )}
            </div>
                
    ))
}

const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["<", "Z", "X", "C", "V", "B", "N", "M", "↳"]

]

const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
}

export default Keyboard