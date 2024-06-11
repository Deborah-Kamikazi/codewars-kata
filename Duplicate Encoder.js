// turn them into arrays and loop through them and if el = ( and if it is included more than two it will be equal to )


function duplicateEncode(word){

    let words = word.toLowerCase().split("").map((els,index,array) => { 
     let news  = array.filter((el)=>{
        return els === el

     }).length
     
     if(news === 1){
        return "(";
     }
      else{
        return ")";
      }
   }).join("");
   console.log(words)
    
}
console.log( duplicateEncode('Success'))