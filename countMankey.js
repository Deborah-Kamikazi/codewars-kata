function monkeyCount(n){
    let newArray = []
   for(let i = 1 ; i<= n ; i++){
     newArray.push(i);
   }
    return newArray;
  }
  console.log( monkeyCount(5))