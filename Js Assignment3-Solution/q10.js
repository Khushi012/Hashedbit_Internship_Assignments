/*
// Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
*/
function revString(input) {
    const characters = input.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');
    return reversedString;
  }
  const input = "Hello";
  const output = revString(input);
  console.log("Output:", output);