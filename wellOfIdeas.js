function well(x){
  
    let count = 0;
    
    for(let i=0; i<x.length; i++){
    if(x[i] ==="good"){
      count ++;
    }}
      if(count === 0){
        return "Fail!";
      }
      else if (count <= 2){
        return "Publish!";
      }
      else{
        return "I smell a series!";
      }
    }
    console.log(well(['bad','bad','bad','bad','bad','bad','good', "good"]))