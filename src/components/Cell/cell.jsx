import React from 'react'
import classNames from 'classnames'


import './Cell.css';

export function Cell(props) {
    const cellContentClass = classNames({
        'cell-content': true,
        populated: props.value
    })


    // let cellContentClass = 'cell-content'

    // if (cellContentClass) {
    //     cellContentClass += ' populated'
    // }

    const cellClasses = classNames({
        cell: true,
        winner: props.isWinner
    })


  return (
    <button className={cellClasses} onClick={props.click}>
        <span className={cellContentClass}>{props.value}</span>
    </button>
       
  );
}
