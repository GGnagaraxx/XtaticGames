import React, { useState } from 'react'
import { FaInfoCircle, FaRegCircle  } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import './xopage.css'

function XOPage() {

  const [gridSet, setGridSet] = useState([
    [
      "",
      "",
      ""
    ],
    [
      "",
      "",
      ""
    ],
    [
      "",
      "",
      ""
    ],
  ])
  const [turn, setTurn] = useState("X");


  function handleGridClick(e){
    
  }


  function getGridMark(grid){
    if(grid == "x")
      return(<IoCloseSharp className='x-mark'/>)
    else if(grid == "o")
      return (<FaRegCircle className='o-mark'/>)
  }


  const gridMap = gridSet.map((gridRow, rowKey) => 
    gridRow.map((grid, key) => {
      const id = rowKey + "" + key;

      return(
        <div className="xno-grid-cell" id={id} key={id}>
          {
            getGridMark(grid)
          }
        </div>
      )
    })
  )

  return (
    <div className='page'>
        <div className='xnos page-content'>
            <div className="title">
                <h1>X <span>&</span> Os</h1>
            </div>
            <div className="game-header">
              <h2 className={'turn-label ' + (turn == "X" ? "x-turn" : "o-turn")}>
                <span>{turn}</span>'s Turn
              </h2>
              {/* <h2></h2> */}
              <FaInfoCircle className='info-icon'/>
            </div>
            <div className="game-container">
              <div className="xno-grid">
                {gridMap}
              </div>
            </div>
        </div>
    </div>
  )
}

export default XOPage