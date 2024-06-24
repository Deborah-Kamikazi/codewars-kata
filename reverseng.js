function dataReverse(data) {
    const final = []
    const finals = []
   for(let i=0;i<data.length;i+=8){
    let array = data.slice(i,i+8)
    final.push(array);  
   }
     finals.push(final.reverse())
     return finals.flat(6)
   }
   dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])

