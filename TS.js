function change(arr){
  return arr.filter((el)=>{
    return typeof el === 'number' 
  }).reduce((acc,cur)=>acc+cur,0).toString(2);

}
 console.log(change([1,2,'a']))