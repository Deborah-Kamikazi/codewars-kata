// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let newArray = str.split(" ").map((el)=>el.split("").reverse().join('')).join(' ')
   
   return newArray;
  }
  console.log( reverseWords("This is an example!"))