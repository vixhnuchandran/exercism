//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

export class Palindromes {
  static generate(obj) {
    const limits = { ...obj };
    const maxFact = limits['maxFactor'];
    const minFact = limits['minFactor'];

    if (minFact === maxFact || maxFact - minFact === 1) {
      return {
        smallest: { value: null, factors: [] },
        largest: { value: null, factors: [] }
      }
    }
    if (maxFact < minFact) { throw new Error('min must be <= max') }


    let palindromes = [];
    let palindromesObj = {};

    for (let i = minFact; i <= maxFact; i++) {
      for (let j = i; j <= maxFact; j++) {
        const product = i * j;
        if (isPalindrome(product.toString())) {
          palindromes.push([i, j, product]);

          if (!palindromesObj[product]) {
            palindromesObj[product] = [];
          }
          palindromesObj[product].push([i, j]);
        }
      }
    }

    const sortedPalindromes = [...palindromes].sort((a, b) => a[2] - b[2]);
    const smallestValue = sortedPalindromes[0][2];
    const largestValue = sortedPalindromes[sortedPalindromes.length - 1][2];

    const getFactors = (value) => {
      return palindromesObj[value] || [];
    };

    return {
      smallest: { value: smallestValue, factors: getFactors(smallestValue) },
      largest: { value: largestValue, factors: getFactors(largestValue) },
    };
  }
}