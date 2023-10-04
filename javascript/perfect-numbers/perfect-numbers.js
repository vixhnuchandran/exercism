//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  let sum = 0;
  if (num === 1) return "deficient";
  if (num <= 0) throw new Error('Classification is only possible for natural numbers.');
  for (let n = 1; n < (num / 2) + 1; n++) {
    if (num % n === 0) {
      sum += n
    }
  }
  return sum < num ? 'deficient' : sum > num ? 'abundant' : 'perfect';
}
