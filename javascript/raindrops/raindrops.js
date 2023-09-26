//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  const factors = { 3: 'Pling', 5: 'Plang', 7: 'Plong' };
  let textOP = '';

  for (const fact in factors) {
    if (number % fact === 0) {
      textOP += factors[fact];
    }
  }

  return textOP || String(number);
};
