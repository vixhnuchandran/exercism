//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (input) => {

  if (input < 2) { return [] };

  let factors = [];
  let i = 2;
  while (i <= input) {
      if (input % i === 0) {
          factors.push(i)
          input = input / i;
      }
      else {
          i++
      }
  }
  return factors;
}