// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2

function mostLikely(prob1,prob2){
    const prop3 = [prob1.split(':').map((prop,index)=>Number(prop)),prob2.split(':').map((prop,index)=>Number(prop))]
    const prop4 = prop3.map((el)=>{
        return el[0]/el[1];
    }) 
    return prop4[0]>prop4[1];

  }
  console.log(mostLikely('4:3','6:2'))