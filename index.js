// code your solution here
function superbowlWin(array) {
    const winningYear = array.find(object => object.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
  
