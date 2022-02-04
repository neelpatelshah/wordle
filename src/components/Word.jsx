import React from 'react';
import Square from "./Square"

const Word = ({ word, colors, height, width }) => {

    const letters = ["this", "is", "an", "easter", "egg"]

    return (
        <div style={styles.row}>
            {letters.map((_, index) => 
                <Square 
                    letter={word[index]}
                    color={colors[index]}
                    height={height}
                    width={width}
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