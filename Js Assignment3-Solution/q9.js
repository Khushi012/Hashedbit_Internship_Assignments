// Write a function to count the number of words in a paragraph.
let para=" this code snippet will count the number of words in a paragraph."
const words = para.split(' ');
const filteredWords = words.filter(word => word.length > 0);
console.log(filteredWords)
console.log("Number of words is :",filteredWords.length)
