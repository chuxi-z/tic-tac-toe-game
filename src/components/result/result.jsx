import classNames from 'classnames'

import './Result.css';



export function Result(props) {

    const resultClass = classNames({
        'modal-open': props.gameOver
    })
    
    let message = ''
    if (props.winner === 'Draw'){
        message = 'Draw'
    }
    else{
        message = 'The winner is ' +  props.winner
    }

  return (
    <div id="modal-overlay" className={resultClass}>
        <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                    <span>{message}</span>
                </div>
            </div>
            <div id="new-game-container">
                <button id="new-game-button" onClick={props.onNewGame}>Start New Game</button>
            </div>
        </div>
    </div>
  );
}
