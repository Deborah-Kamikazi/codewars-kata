function sortArray(array) {
   
   const odds = array.filter(num => num % 2!== 0);
   const evens = array.filter(num => num % 2 === 0);
   odds.sort((a, b) => a - b);
   let result = [];
   let i = 0;
   let j = 0;
   while (i < evens.length && j < odds.length) {
       if (evens[i] < odds[j]) {
           result.push(evens[i]);
           i++;
       } else {
           result.push(odds[j]);
           j++;
       }
   }
   
   result.push(...evens.slice(i));
   result.push(...odds.slice(j));
   
   return result;
}
   console.log(sortArray([5, 3, 2, 8, 1, 4]))

//  function sortArray(array) {))