//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const codonToProtein = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP',
};

export const translate = (rna) => {
  const codonSize = 3;
  const proteins = [];
  if (!rna) { return proteins }
  else {
    for (let i = 0; i < rna.length; i += codonSize) {
      const codon = rna.slice(i, i + codonSize);

      if (!(codon in codonToProtein)) {
        throw new Error('Invalid codon');
      }

      if (codonToProtein[codon] === 'STOP') {
        break;
      }

      proteins.push(codonToProtein[codon]);
    }
  }
  return proteins;
}
