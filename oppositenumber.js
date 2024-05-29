
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  
  
    let opposites = number<0?number*=-1:number>0? number*=-1:number;
    
    return number;
  }
  console.log(opposite(14))