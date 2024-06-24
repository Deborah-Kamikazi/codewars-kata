
// Hi! Welcome to my first kata.

// In this kata the task is to take a list of integers and a key, and group the list according to a simple rule: ints greater than or equal to the key, and ints less than the key.

// You are to return a nested list. If the list is empty, simply return an empty list.

// Confused? Okay, let me walk you through an example...

// The input is: [1, 1, 1, 0, 0, 6, 10, 5, 10], the key is: 6
let stopindex = -1
let firstA = []
function groupInts(xs,x) {
    for(let i = 0; i < xs.length; i++) {
        if(xs[i]>=x){
            stopindex = i
            break;
        }
        firstA.push((xs[i]));
      
  }
  for(let i=stopindex; i<xs.length; i++){
     if(!xs[i]>=x){
        stopindex = i
        console.log()
        
    
    
        
     }
  }
  console.log(firstA)
}
  groupInts( [1, 1, 1, 0, 0, 6, 10, 5, 10],6)