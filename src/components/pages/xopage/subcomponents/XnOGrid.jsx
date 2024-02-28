import React, { useState } from 'react';
import { checkForWinner } from '../xoFunctions';
import { IoCloseSharp, IoEllipseOutline } from "react-icons/io5";


function XnOGrid(props) {

    const {
        winner,
        winningGrid,
        gridSet,
        turn,
        setGridSet,
        setTurn, 
        setWinner, 
        setWinningGrid,
        setModalOpen} = props;



    function checkForEndGame(gridLoc){
        const ret = checkForWinner(gridLoc, gridSet, turn);
    
        if(ret.hasWinner){
          setWinner(turn);
          setWinningGrid(ret.matchedGrids);
          setModalOpen(true);
          return
        }
    
        let hasEmpty = false;
        gridSet.map((row) => {
          if(row.includes(""))
            hasEmpty = true;
        })
    
        if(!hasEmpty){
          setWinner("Draw");
          setModalOpen(true);
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
                (grid != "" || winner != null ? " disabled" : "") + 
                (winningGrid.includes(id) && winner == "X" ? " x-winning-grid" : "") +
                (winningGrid.includes(id) && winner == "O" ? " o-winning-grid" : "")
            } 
            id={id} 
            key={id}
            tabIndex={0}
            onClick={handleGridClick}>
            {
                getGridMark(grid)
            }
            </div>
        )
        })
    )

    return (
        <div className="xno-grid">
            {gridMap}
        </div>
    )
}

export default XnOGrid