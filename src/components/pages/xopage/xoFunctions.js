


function checkForWinner(gridLoc, gridSet, turn){
    let hasWinner = false;
    const xLoc = parseInt(gridLoc[0]);
    const yLoc = parseInt(gridLoc[1]);
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

    let matchedGrids = [];
    if((xLoc == 1 || yLoc == 1) && sameAround.length > 1){
      for(let i = 0; i < sameAround.length-1; i++){
        let matched = false;
        for(let j = i+1; j < sameAround.length; j++){
          if(
            sameAround[j].x == (0 - sameAround[i].x) && 
            sameAround[j].y == (0 - sameAround[i].y)
          ){
            matchedGrids = [
              (xLoc + sameAround[j].x) + "-" + (yLoc + sameAround[j].y),
              xLoc + "-" + yLoc,
              (xLoc + sameAround[i].x) + "-" + (yLoc + sameAround[i].y),
            ]
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
          matchedGrids = [
            (xLoc + sameAround[i].x) + "-" + (yLoc + sameAround[i].y),
            xLoc + "-" + yLoc,
            xFarOffset + "-" + yFarOffset
          ]
          hasWinner = true;
        }
      }
    }

    return {hasWinner, matchedGrids}

}



export {
    checkForWinner
}