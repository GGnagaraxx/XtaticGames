import React, { useState } from 'react'
import { FaInfoCircle, FaRegCircle  } from "react-icons/fa";
import { IoCloseSharp, IoEllipseOutline } from "react-icons/io5";

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
  const [winner, setWinner] = useState();

  function checkForWinner(gridLoc){
    let hasWinner = false;
    const xLoc = parseInt(gridLoc[0]);
    const yLoc = parseInt(gridLoc[1]);

    for(let i=-1; i<=1; i++){
      const offA = i - 1;
      const offB = i + 1;

      console.log("Checked for Winner")
      console.log("GridLoc: ", xLoc, yLoc)
      // console.log("Check", gridSet[xLoc + offA][yLoc]);

      //winner check here
    }

    
    return hasWinner

  }

  function checkForEndGame(gridLoc){
    const hasWinner = checkForWinner(gridLoc);
    if(hasWinner){
      setWinner(turn);
      console.log("Winner is ", turn)
      return
    }

    let hasEmpty = false;
    gridSet.map((row) => {
      if(row.includes(""))
        hasEmpty = true;
    })

    if(!hasEmpty){
      setWinner("Draw");
    }
  }

  function handleGridClick(e){
    
    if(e.currentTarget.className.includes("disabled"))
      return

    const id = e.currentTarget.id;
    const gridLoc = id.split("-");
    
    let newGridSet = [...gridSet];
    newGridSet[gridLoc[0]][gridLoc[1]] = turn;
    setGridSet(newGridSet)
    checkForEndGame(gridLoc);
    setTurn(turn == "X" ? "O" : "X")
  }


  function getGridMark(grid){
    if(grid == "X")
      return(<IoCloseSharp className='xno-mark x-mark'/>)
    else if(grid == "O")
      return (<IoEllipseOutline className='xno-mark o-mark'/>)
  }


  const gridMap = gridSet.map((gridRow, rowKey) => 
    gridRow.map((grid, key) => {
      const id = rowKey + "-" + key;

      return(
        <div 
          className={
            "xno-grid-cell " +
            (grid != "" ? "disabled " : "")
          } 
          id={id} 
          key={id}
          onClick={handleGridClick}>
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