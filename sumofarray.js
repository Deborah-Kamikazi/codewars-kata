function sum (numbers) {
    
    let sums=0;
   if(numbers.length>0){
   for(let i=0;i<numbers.length;i++){
      sums = sums+numbers[i];}
   return sums;
   }
  else{
    return 0;
  } 
    
};
sum ([3,4,5,6,7,,8])