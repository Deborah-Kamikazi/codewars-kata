// turn them into the array right? then loop the chenge to numbers if 
//  through if element typof is number nexat elemnt
//  type of it is nun number multiply them.



function stringExpansion(s) {
  let recentNumber = 1;
let result = "";
for(el of s){
    // if(!isNaN(el)){  
        if (typeof Number(el) == 'number') {
        recentNumber = Number(el);
    }
    else{
       result += el.repeat(recentNumber);
    }
}
 return result;
}

// console.log(stringExpansion('a2bcde'))
Number.isNaN
console.log(Number("2"));