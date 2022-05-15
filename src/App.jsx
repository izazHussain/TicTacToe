import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import Square from "./components/Square"
import History from "./components/History";
import StatusMess from "./components/StatusMess";

import "./styles/root.scss";

function App() {
  const newGame = [{ board: Array(9).fill(null), flag: true }];
  const [history, setHistory] = useState(newGame);
  const [currentRound, setCurrent] = useState(0);
  console.log(`history ${history}`);

  const { winner, winningInd } = calculateWinner(history[currentRound].board);

  const changeRound = (pos) => {
    setCurrent(pos);
  }

  const updateValueBoard = squareNum => {
    const updateValueSquare = () => {
      if (history[currentRound].board[squareNum] || winner) return;

      const isLastMove = currentRound + 1 === history.length;

      setHistory(prev => {
        const last = isLastMove ? prev[prev.length - 1] : prev[currentRound];

        let newBoard = last.board.map((val, pos) => {
          if (pos == squareNum) return last.flag ? 'X' : 'O';

          return val;
        })

        const currentHistory = isLastMove
          ? prev
          : prev.slice(0, prev.indexOf(last) + 1);

        return currentHistory.concat({
          board: newBoard,
          flag: !last.flag,
        });
      });

      setCurrent(prev => {
        return prev + 1;
      });

    }
    return (<Square value={history[currentRound].board[squareNum]} updateValue={updateValueSquare} winningInd={winningInd} squareNum={squareNum} />)
  }

  const setNewGame = () => {
    setHistory(newGame);
    setCurrent(0);
  }
  return (
    <>
      <div className="app">
        <h1>
          TIC <span className="text-orange">TAC</span> TOE
        </h1>
        <StatusMess winner={winner} current={history[currentRound]} />
        <Board updateValueBoard={updateValueBoard} />
        <button
          type="button"
          onClick={setNewGame}
          className={`btn-reset ${winner ? 'active' : ''}`}
        >
          New game
        </button>
        <h2 style={{ fontWeight: 'normal' }}>Current game history</h2>
        <History history={history} changeRound={changeRound} currentRound={currentRound} />
        <div className="bg-balls" />
      </div>
    </>
  )
}

export default App;
