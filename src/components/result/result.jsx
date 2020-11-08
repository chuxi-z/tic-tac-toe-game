import classNames from 'classnames'

import './Result.css';



export function Result(props) {

    const resultClass = classNames({
        'modal-open': props.gameOver
    })

  return (
    <div id="modal-overlay" className={resultClass}>
        <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                    <span></span>
                </div>
            </div>
            <div id="new-game-container">
                <button id="new-game-button">Start New Game</button>
            </div>
        </div>
    </div>
  );
}
