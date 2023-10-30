//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (phrase) => {
  const regex = /([^aeioquxy\s]*(?:qu|q|x|y)?)([aeiouxy]\w*)/g
  return phrase.replace(regex, '$2$1ay')
};

