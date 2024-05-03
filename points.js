function points(games) {
    let sum = 0;
    
   for(let i=0 ;i<games.length;i++ ) {
      games[i]= games[i].split(":");
    }
    console.log(games);

    for(let n=0 ;n<games.length;n++){
      if(games[n][0]>games[n][1]){
         sum+=3;
      }
      
      else if(games[n][0]===games[n][0]){
      sum +=1;
      }
      else{
        sum =sum +0;
      }
    }
     return sum;
 
    //  Asimple way of it in short line

 return games.map(el =>{
     return (el[0]> el[2])? 3 : (el[0] === el[2])? 1 :0
  }).reduce((a,b)=> a+ b ,0 )
}
  
console.log(points(["1:0","2:0","3:0","4:0","0:1","3:1","4:1","3:2","4:2","4:3"]))
