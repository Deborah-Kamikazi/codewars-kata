// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function highestScoringWord(input) {
    // Split the input string into words
    const words = input.split(' ');
  
    // Function to calculate the score of a word
    const wordScore = (word) => {
      return word.split('').reduce((score, letter) => {
        return score + (letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
      }, 0);
    };
  
    // Variables to keep track of the highest scoring word and its score
    let highestWord = '';
    let highestScore = 0;
  
    // Iterate through the words to find the highest scoring word
    for (const word of words) {
      const score = wordScore(word);
      if (score > highestScore) {
        highestScore = score;
        highestWord = word;
      }
    }
  
    return highestWord;
  }
console.log(highestScoringWord('man i need a taxi up to ubud'))
