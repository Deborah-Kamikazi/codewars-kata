function neutralise(s1, s2) {
   let AS1 = s1.split('');
   let AS2 = s2.split('');
   let newA = [];

   AS1.forEach((answer,index) =>{
    
     if(answer == AS2[index]){
        newA.push( answer);
     }
     else if(answer !== AS2[index]){
        newA.push(0);
     }
   })
 return newA.join('');
   
}
console.log (neutralise("--++--", "--++--"))