import React from "react";

function Board({updateValueBoard}){
    
    return(
        <div className="board">
            <div className="board-row">
                {updateValueBoard(0)}
                {updateValueBoard(1)}
                {updateValueBoard(2)}
            </div>
            <div className="board-row">
                {updateValueBoard(3)}
                {updateValueBoard(4)}
                {updateValueBoard(5)}
            </div>
            <div className="board-row">
                {updateValueBoard(6)}
                {updateValueBoard(7)}
                {updateValueBoard(8)}
            </div>
        </div>
    )
}

export default Board;