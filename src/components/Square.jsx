import React from "react";

function Square({ value, updateValue, winningInd, squareNum }) {
    const isWin = winningInd.includes(squareNum);
    return (
        <button type="button"
            className={`square ${isWin ? 'winning' : ''} ${value == 'X' ? 'text-green' : 'text-orange'
                }`}
            onClick={updateValue}>{value}</button>
    )
}

export default Square;