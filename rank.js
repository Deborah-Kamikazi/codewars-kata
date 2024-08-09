// Given an array (or list) of scores, return the array of ranks for each value in the array. 
// The largest value has rank 1, the second largest value has rank 2, and so on.
//  Ties should be handled by assigning the same rank to all tied values. For example:



function ranks(array) {
  // Create an array of objects where each object contains the value and its original index
  let valueIndexArray = array.map((value, index) => ({ value, index }));

  // Sort the array of objects by value in descending order
  valueIndexArray.sort((a, b) => b.value - a.value);

  // Initialize the ranks array with the same length as the input array
  let rank = new Array(array.length);

  // Assign ranks based on the sorted order
  for (let i = 0; i < valueIndexArray.length; i++) {
      if (i > 0 && valueIndexArray[i].value === valueIndexArray[i - 1].value) {
          // If the current value is the same as the previous value, assign the same rank
          rank[valueIndexArray[i].index] = rank[valueIndexArray[i - 1].index];
      } else {
          // Otherwise, assign the current rank (i + 1)
          rank[valueIndexArray[i].index] = i + 1;
      }
  }

  return rank;
}

ranks([5, 2, 3, 5, 5, 4, 9, 8, 0])