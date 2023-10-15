//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const answer = (problem) => {
  if (!problem.match(/What is/g)) throw new Error('Unknown operation');
  if (!problem.match(/\d/g)) throw new Error('Syntax error');
  if (problem.match(/\d\s\d/)) throw new Error('Syntax error');
  if (problem.match(/\d\s*(plus|minus|multiplied|divided)+\?$/)) throw new Error('Syntax error');
  if (!problem.match(/\d\s*[plus|minus|multiplied|divided|?]/)) throw new Error('Unknown operation');
  if (problem.match(/(plus|minus|multiplied|divided)\s*(plus|minus|multiplied|divided)/)) throw new Error('Syntax error');

  let termString = problem.match(/-?\d+|plus|minus|multiplied|divided/g).join(' ');
  termString = termString.replace(/plus/g, '+').replace(/minus/g, '-').replace(/multiplied/g, '*').replace(/divided/g, '/');

  let result = termString.match(/-?\d+/)[0];
  let operations = termString.match(/[\+\-\*\/]\s+-?\d+/g);

  if (operations === null) return Number(result);

  for (const operationString of operations) {
    result = eval(`${result} ${operationString}`);
  }

  return result;
};


