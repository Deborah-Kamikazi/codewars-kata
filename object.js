

function sameCase(a, b){
  let uCase = 'ABCDEFGHIJKLMNOPQRSTVUXWYZ';
  let lCase = 'abcdefghijklmnopqrstvuxwyz';
 
  let All = 'ABCDEFGHIJKLMNOPQRSTVUXWYZabcdefghijklmnopqrstvuxwyz'
  
  if(!All.includes(a)|| !All.includes(b)){
    return -1;
  }
   
  if(uCase.includes(a)&& uCase.includes(b)){    
    return 1;
  }
   if(lCase.includes(a) && lCase.includes(b)  ){
    return 1;
  }

  if(!uCase.includes(a)|| uCase.includes(b) || uCase.includes(a) || !uCase.includes(b)  ){
    return 0;
  }

  if(lCase.includes(a) || !lCase.includes(b) || !lCase.includes(a) || lCase.includes(b)){
    return 0;
  }
 
}

console.log(sameCase(' ', 'Z'))

