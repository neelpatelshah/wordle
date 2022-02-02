import React from 'react';
import Square from "./Square"

const Word = ({ word, colors }) => {

    const letters = ["this", "is", "an", "easter", "egg"]

    return (
        <div style={styles.row}>
            {letters.map((_, index) => 
                <Square 
                    letter={word[index]}
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