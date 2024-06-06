
function removeExclamationMarks(s) {
  let original = s.split("").filter((el) => el !== '!' ).join("");
   return original;
}
console.log(removeExclamationMarks("Hell! Wor!ld!"))