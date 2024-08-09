

// i will loop through them and check if
// it is odd and if  using (ma)it is odd i add the - infront it

// function dashatize(Num) {
//   const array = []
//  let nums = Num.toString()
//   for(num of nums){
//        if(num%2!==0){
//         array.push(`-${num}-`)
//        }
//        else{
//         array.push(num)
//        }
//     }
//     console.log(array.join(''))
//   }
//   dashatize(6815)
// function dashatize(num) {

//   var numP = Math.abs(num) + '';
//   var result = [numP[0]];
//   while (numP > 0) {
//     for (var x = 1; x < numP.length; x++) {
//         result.push('-', numP[x]);

//     }
//     return result.join('');
//     }

//   return numP;
// }
//  console.log(dashatize(6815))

function solution(str){
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let pair = str.slice(i, i + 2);
    if (pair.length === 1) {
      pair += '_';
    }
    result.push(pair);
  }
  return result
}
console.log(solution('abc'))