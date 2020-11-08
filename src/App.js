import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <div id="board">
        <button class="cell">
          <span class="cell-content"></span>
        </button>
        <button class="cell">
          <span class="cell-content"></span>
        </button>
        <button class="cell">
          <span class="cell-content"></span>
        </button>
        <button class="cell">
          <span class="cell-content"></span>
        </button>
        <button class="cell">
          <span class="cell-content"></span>
        </button>
        <button class="cell">
          <span class="cell-content"></span>
        </button>
        <button class="cell">
          <span class="cell-content"></span>
        </button>
        <button class="cell">
          <span class="cell-content"></span>
        </button>
        <button class="cell">
          <span class="cell-content"></span>
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

export default App;
