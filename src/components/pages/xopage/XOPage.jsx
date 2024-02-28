import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from "react-icons/fa";
import { IoRefreshSharp } from "react-icons/io5";

import './xoPage.css'
import WinnerModal from './subcomponents/WinnerModal';
import XnOGrid from './subcomponents/XnOGrid';
import Button from '../../common/button/Button';

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
  const [winningGrid, setWinningGrid] = useState([]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if(!modalOpen){
      triggerReset();
    } else {
      setTimeout(() => {
        setModalOpen(false);
      }, 5000);
    }
  }, [modalOpen])


  function triggerReset(){
    setWinner(null);
    setGridSet([["","",""],["","",""],["","",""]]);
    setTurn("X");
    setWinningGrid([]);
  }


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
          <div className="icons-container">
            <IoRefreshSharp 
              className='refresh-icon icon interactable' 
              tabIndex={0}
              onClick={triggerReset}/>
            <FaInfoCircle className='info-icon icon interactable' tabIndex={0}/>
          </div>
        </div>
        <div className="game-container">
          <XnOGrid 
            winner={winner}
            winningGrid={winningGrid}
            gridSet={gridSet}
            turn={turn}
            setGridSet={setGridSet}
            triggerReset={triggerReset}
            setTurn={setTurn} 
            setWinner={setWinner} 
            setWinningGrid={setWinningGrid}
            setModalOpen={setModalOpen}/>
        </div>
      </div>
      <Button>
        Test
      </Button>
      <WinnerModal 
        message={winner == "Draw" ?  "It's a Draw!" : winner + "s Wins!"} 
        active={modalOpen}
        hasManualClose
        handleCloseModal={() => setModalOpen(false)}/>
    </div>
  )
}

export default XOPage