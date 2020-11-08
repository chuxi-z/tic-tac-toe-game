import './Board.css';
import {Cell} from '../Cell/cell.jsx'

export function Board(props) {

    let cells = props.cellValues.map((item, index) =>{
        const highlight = props.winningCombination && props.winningCombination.indexOf(index) >= 0

        return <Cell value={item} isWinner={highlight} key={index} click={() => {props.cellClick(index)}}></Cell>
    })


  return (
    <div id="board">
        {cells}
      </div>
  );
}
