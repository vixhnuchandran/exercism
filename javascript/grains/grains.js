/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (x) =>
x > 0
  ? x <= 64
    ? (() => { return BigInt(2) ** BigInt(x - 1); })()
    : (() => { throw new Error('square must be between 1 and 64'); })()
  : (() => { throw new Error('square must be between 1 and 64'); })();

export const total = () => {
  return BigInt((2n) ** BigInt(64n)) -1n;

};
