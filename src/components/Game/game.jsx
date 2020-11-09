import React, {useState} from 'react'

import './Game.css';
import {Board} from '../Board/board'
import {Result} from '../result/result.jsx'
import {winnerResult} from '../../utils/figureWinner'

export default function Game() {
  let [cellValues, setCellvalues] = useState(['','','','','','','','',''])
  let [winningCombination, setWinningCombination] = useState([])
  let [turn, setTurn] = useState(true)
  let [isGameOver, setIsGameOver] = useState(false)
  let [step, setStep] = useState(9)
  let [winner, setWinner] = useState('')

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

      const newStep = step-1
      // console.log(newStep);
      setStep(newStep)
      // console.log(step);

      setCellvalues(newCellValues)
      const result = winnerResult(newCellValues, index)
      if (result.result){
        setWinner(result.winner)
        setWinningCombination(result.winningCombination)
      }
      setIsGameOver(result.result)
      if (step === 1){
        setWinner('Draw')
        setIsGameOver(true)
      }
    }
  }

  const newGame = () =>{
    setCellvalues(['','','','','','','','',''])
    setStep(9)
    setTurn(true)
    setWinner('')
    setIsGameOver(false)
    setWinningCombination([])
  }

  return (
    <div>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board cellValues={cellValues} winningCombination={winningCombination} cellClick={onCellClick}/>
      </div>

      <Result gameOver={isGameOver} winner={winner} onNewGame={newGame}></Result>
    </div>
  );
}

