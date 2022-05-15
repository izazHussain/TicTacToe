import React from "react";

function History({ history, changeRound, currentRound }) {
    return (
        <div className="history-wrapper">
            <ul className="history">
                {
                    history.map((_, pos) => {
                        return <li key={pos}><button className={`btn-move ${pos === currentRound ? 'active' : ''}`}
                            onClick={() => {
                                changeRound(pos);
                            }} type="button">{pos == 0 ? "Go to start" : `Go to move ${pos}`}</button></li>
                    })
                }
            </ul>
        </div>
    )
}

export default History;