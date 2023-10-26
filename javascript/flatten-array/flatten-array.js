//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const flatten = (nestedList) => {
  return nestedList
    .reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), [])
    .filter(item => item !== null)
};

//  Direct Solution using Array.prototype.flat()
// export const flatten = (nestedList) => {
//   let output = (nestedList.flat(Infinity)).filter(item => item !== null);
//   return output
// };
