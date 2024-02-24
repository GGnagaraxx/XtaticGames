import React, { useState } from 'react'
import { FaInfoCircle, FaRegCircle  } from "react-icons/fa";
import { IoCloseSharp, IoEllipseOutline } from "react-icons/io5";

import './xopage.css'
import WinnerModal from './subcomponents/WinnerModal';

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
    const gridEnds = [0,2]
    let sameAround = [];

    for(let x=-1; x<=1; x++){
      for(let y=-1; y<=1; y++){
        const xOffset = xLoc + x;
        const yOffset = yLoc + y;

        if(
          !(x == 0 && y == 0) &&
          xOffset >= 0 && xOffset <= 2 &&
          yOffset >= 0 && yOffset <= 2 &&
          gridSet[xOffset][yOffset] && gridSet[xOffset][yOffset] == turn){
            sameAround.push({x: x, y: y});
        }
      }
    }

    if((xLoc == 1 || yLoc == 1) && sameAround.length > 1){
      for(let i = 0; i < sameAround.length-1; i++){
        let matched = false;
        for(let j = i+1; j < sameAround.length; j++){
          if(
            sameAround[j].x == (0 - sameAround[i].x) && 
            sameAround[j].y == (0 - sameAround[i].y)
          ){
            matched = true;
            break;
          }
        }
        if(matched){
          hasWinner = true;
          break;
        }
      }
    }

    if(sameAround.length > 0){
      for(let i = 0; i < sameAround.length; i++){
        const xFarOffset = xLoc + sameAround[i].x * 2;
        const yFarOffset = yLoc + sameAround[i].y * 2;

        if(
          xFarOffset >= 0 && xFarOffset <= 2 &&
          yFarOffset >= 0 && yFarOffset <= 2 &&
          gridSet[xFarOffset][yFarOffset] == turn
        ){
          hasWinner = true;
        }
      }
    }

    
    return hasWinner

  }

  function checkForEndGame(gridLoc){
    const hasWinner = checkForWinner(gridLoc);
    if(hasWinner){
      setWinner(turn);
      setTimeout(() => {
        triggerReset()
      }, 5000);
      return
    }

    let hasEmpty = false;
    gridSet.map((row) => {
      if(row.includes(""))
        hasEmpty = true;
    })

    if(!hasEmpty){
      setWinner("Draw");
      setTimeout(() => {
        triggerReset()
      }, 5000);
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

  function triggerReset(){
    setWinner(null);
    setGridSet([["","",""],["","",""],["","",""]]);
    setTurn("X");
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
            (grid != "" || winner != null ? "disabled " : "")
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
      <WinnerModal 
        message={winner == "Draw" ?  "It's a Draw!" : winner + "s Wins!"} 
        active={winner != null}
        hasManualClose
        handleCloseModal={triggerReset}/>
    </div>
  )
}

export default XOPage