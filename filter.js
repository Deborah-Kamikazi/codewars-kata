

    function divCon(x){
      let num  = x.filter((el)=> typeof(el)==="number").reduce((accu,curr) => accu+curr);
      let nonNum  = x.filter((el)=> typeof(el)!=="number").map((el) => Number(el)).reduce((accu,curr) => accu+curr);
      
    return num - nonNum;
      
       }
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));





















//     if(typeof(n)==="object") {
//         for(ns of n){
//         let objects = ns%2=== 0 ?'Even':'Odd';
//         return objects;
//         }
//     }
//     let numbers = n%2=== 0 ?'Even':'Odd';
//     return numbers;
   
   

// console.log(evenOrOdd([4]))