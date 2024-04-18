function flickSwitch(arr){
    let kami = true;
      let arr2 = [];
    for (let i = 0 ; i < arr.length; i++){
      if(arr[i] === "flick"){
         kami = !kami;
         
    }
    arr2.push(kami);
  
  }
  return arr2;
  }
  console.log(flickSwitch(['codewars', 'flick', 'code', 'flick']))