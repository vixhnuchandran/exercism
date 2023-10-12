//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



const cleanWord = (input) => {

  input = input
    .replace(/,|\n/g, ' ')
    .replace(/\n/g, '')
    .replace(/[.\/@#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/(?<!\S)'|'(?!\S)/g, '')
    .trim();
  return input;
}

export const countWords = (input) => {

  let words = cleanWord(input);
  let result = {};

  
  for (let word of words.split(/\s+/)) {
    if (word.toLowerCase() in result) {
      result[word.toLowerCase()]++;
    } else {
      result[word.toLowerCase()] = 1;
    }
  }
  return result;

};

