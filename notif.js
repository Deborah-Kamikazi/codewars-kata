  
  
  
  
  function reverse(arr) {
 
    return arr.map((el,i,me)=> me[me.length-1 -i])
    
  }

  console.log(reverse([1,3,4,5,4,6]))