//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (arr, fn) => {
  let newKeep = [];
  for (let each of arr) {
    if (fn(each)) { newKeep.push(each) };
  }
  return newKeep;
};


export const discard = (arr, fn) => {
  return keep(arr, item => !fn(item))
};
