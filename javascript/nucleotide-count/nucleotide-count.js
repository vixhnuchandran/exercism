//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  let result = '';
  const nTide = ['A', 'C', 'G', 'T'];

  if (/[^ACGT]/i.test(strand)) {
    throw new Error('Invalid nucleotide in strand');
  }

    for (let i = 0; i < nTide.length; i++) {
      let n = new RegExp(nTide[i], 'g');
      const matches = strand.match(n);
      result += (result === '' ? '' : ' ') + (matches ? matches.length : 0);
    }
    return result;
    
}

//Code reduced
// export function countNucleotides(strand) {
//   if (/[^ACGT]/i.test(strand)) {
//     throw new Error('Invalid nucleotide in strand');
//   }

//   return ['A', 'C', 'G', 'T'].map(n => (strand.match(new RegExp(n, 'g')) || []).length).join(' ');
// }