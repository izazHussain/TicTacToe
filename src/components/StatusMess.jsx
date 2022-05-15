import React from "react";

function StatusMess({winner,current}){
    console.log(current);
    let noMoves = current.board.every(val=>{
        return val!=null;
    })
    console.log(noMoves);

    // return(
    //     <h1>
    //         {winner && `Winner is ${winner}`}
    //         {!winner && !noMoves && `Next Player is ${current.flag?'X':'O'}`}
    //         {!winner && noMoves && `Its a tie`}
    //     </h1>
    // )
    return (
        <div className="status-message">
          {winner && (
            <>
              Winner is{' '}
              <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
                {winner}
              </span>
            </>
          )}
          {!winner && !noMoves && (
            <>
              Next player is{' '}
              <span className={current.flag ? 'text-green' : 'text-orange'}>
                {current.flag ? 'X' : 'O'}{' '}
              </span>
            </>
          )}
          {!winner && noMoves && (
            <>
              <span className="text-green">X</span> and{' '}
              <span className="text-orange">O</span> tied
            </>
          )}
        </div>
      );
}

export default StatusMess;