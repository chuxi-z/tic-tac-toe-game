import './Game.css';

export default function Game() {
  return (
    <div>
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <div id="board">
        <button className="cell">
          <span className="cell-content"></span>
        </button>
        <button className="cell">
          <span className="cell-content"></span>
        </button>
        <button className="cell">
          <span className="cell-content"></span>
        </button>
        <button className="cell">
          <span className="cell-content"></span>
        </button>
        <button className="cell">
          <span className="cell-content"></span>
        </button>
        <button className="cell">
          <span className="cell-content"></span>
        </button>
        <button className="cell">
          <span className="cell-content"></span>
        </button>
        <button className="cell">
          <span className="cell-content"></span>
        </button>
        <button className="cell">
          <span className="cell-content"></span>
        </button>
      </div>
    </div>


    <div id="modal-overlay">
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
    </div>
  );
}

