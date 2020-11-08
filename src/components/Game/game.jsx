import React from 'react'

import './Game.css';
import {Board} from '../Board/board'

export default function Game() {
  let cellValues = ['','','','','','','','','']
  let winningCombination = []

  const onCellClick = (index) =>{
    console.log(index)
  }

  return (
    <div>
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <Board cellValues={cellValues} winningCombination={winningCombination} cellClick={onCellClick}/>
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

