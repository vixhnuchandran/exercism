//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, lists) => {

  const sortedWord = word.toUpperCase().split('').sort().join('');

  let result = [];

  for (let i = 0; i < lists.length; i++) {
      const sortedListWord = lists[i].toUpperCase().split("").sort().join('');

      if (word.toUpperCase() !== lists[i].toUpperCase()  && sortedWord === sortedListWord) {
          result.push(lists[i]);
      }
  }

  return result;
};
