function pigIt(str){
    return str.split(" ").map((el)=> {
           if(!/[.,!;:?]/g.test(el))  {
           array = el.split("")
           els= array.shift()
           array.push(els,'ay')
          return array.join("")
          
       }
       else{
           return el
       }
       }).join(" ")
     
   }