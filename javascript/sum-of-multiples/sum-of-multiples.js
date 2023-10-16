//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (ePoints, level) => {
  let sumOfMul = 0;
  for (let i = 1; i < level; i++) {
    if (ePoints.some(ePoint => i % ePoint === 0)) {
      sumOfMul += i;
    }
  }
  return sumOfMul;
};