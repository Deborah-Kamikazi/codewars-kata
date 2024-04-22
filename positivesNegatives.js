function countPositivesSumNegatives(input) {
    // your code here
    if(!input || input.length==0) {
        return []
      }
    
    let negatives = 0
    let positives = 0
    
    
    input.forEach(item => {
      if(item < 0) {
        negatives += item
      } else if(item > 0) {
        positives ++
      } 
    })

    console.log(positives)

    return `${positives} ${negatives}`
}  

const result = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) 
console.log(result)