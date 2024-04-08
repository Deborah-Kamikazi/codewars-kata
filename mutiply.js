function multiply(number){
    let digit;
     let mult;
     digit = number.toString().split('').length;
      mult= number * Math.pow(5,digit);
      if(number<0){
        mult = number*Math.pow(5,digit-1);
     }
     return mult;
   }