//
// This is only a SKELETON file for the 'Largest lint Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (lint, span) => {

  if (span > lint.length || lint.length === 0) {
    throw new Error("Span must be smaller than string length");
  }
  if (lint.match(/[^0-9]/g)) {
    throw new Error("Digits input must only contain digits");
  }
  if (span < 0) {
    throw new Error("Span must be greater than zero");
  }

  const segments = [];

  for (let i = 0; i < lint.length - 1; i++) {
    const subLint = lint.substring(i, i + span);

    if (subLint.length === span) {
      segments.push(subLint);

    }
  }
  return Math.max(
    ...segments.map((subLint) =>
      subLint.split("").reduce((acc, curr) => acc * curr, 1)
    )
  );
};














// -----1st attempt-----(did not pass 1 test: 'can get the largest product of a big number')
// export const largestProduct = (lint, span) => {
//   if (lint.split('') === lint.split('').sort()) return 0;
//   if (span > lint.length || lint.length === 0) {
//       throw new Error('Span must be smaller than string length'); I
//   }
//   if (lint.match(/[^0-9]/g)) {
//       throw new Error('Digits input must only contain digits');
//   }
//   if (span < 0) {
//       throw new Error('Span must be greater than zero');
//   }
//
//   const regex = new RegExp(`.{1,${span}}`, 'g');
//   const segments = lint.match(regex);
//   let count = 0;
//   let check = 0;
//   const lSegments = segments.map((item) => {
//       let sum = 1;
//       if (item.length === span) {
//           check += 1;
//           if (item.includes('0')) {
//               count += 1;
//           }
//           for (let i = 0; i < item.length; i++) {
//               sum *= item[i];
//           }
//       }
//       return sum;
//   });
//
//   let rcount = 0;
//   let rcheck = 0;
//   let rlint = lint.split('').reverse().join('')
//   const rsegments = rlint.match(regex);
//   const rSegments = rsegments.map((item) => {
//       let rsum = 1;
//       if (item.length === span) {
//           rcheck += 1;
//           if (item.includes('0')) {
//               rcount += 1;
//           }
//           for (let i = 0; i < item.length; i++) {
//               rsum *= item[i];
//           }
//       }
//       return rsum;
//   }, (a,b) => a-b);
//
//   if (count === check || rcheck === count) return 0;
//   const largest = Math.max(...lSegments , ...rSegments);
//   return largest;
// };
