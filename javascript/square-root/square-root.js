//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// Newton - Raphson method

export const squareRoot = (num) => {
  let n = num / 2;
  while (n * n !== num) {
    n = 0.5 * (n + num / n);
  }
  return n;
};
