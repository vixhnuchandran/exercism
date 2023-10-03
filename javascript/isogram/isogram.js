//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (text) => {
  const pattern = /([a-z]).*?\1/i;
  return !(pattern.test(text));
};

