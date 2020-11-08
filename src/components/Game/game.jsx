import React, {useState} from 'react'

import './Game.css';
import {Board} from '../Board/board'
import {Result} from '../result/result.jsx'

export default function Game() {
  let [cellValues, setCellvalues] = useState(['','','','','','','','',''])
  let winningCombination = []
  let [turn, setTurn] = useState(true)
  let [isGameOver, setIsGameOver] = useState(false)

  const isEmpty = (index) =>{
    return cellValues[index] === ''
  }

  const onCellClick = (index) =>{
    if (isEmpty(index)){
      let newCellValues = [...cellValues]
      // console.log(index)
      if (turn){
        newCellValues[index] = 'x'
        const newTurn = !turn
        setTurn(newTurn)
      }
      else{
        newCellValues[index] = 'o'
        const newTurn = !turn
        setTurn(newTurn)
      }
      
      setCellvalues(newCellValues)
    }
  }

  return (
    <div>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board cellValues={cellValues} winningCombination={winningCombination} cellClick={onCellClick}/>
      </div>

      <Result gameOver={isGameOver}></Result>
    </div>
  );
}

