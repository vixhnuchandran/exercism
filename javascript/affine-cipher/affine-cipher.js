const checkCoPrime = (a, m) => {
  if (m === 0) {
    return a === 1;
  }
  return checkCoPrime(m, a % m);
}

const mmi = (a, m) => {
  for (let n = 0; n < m; n++) if ((a * n) % m == 1) return n;
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'


export const encode = (phrase, { a, b }) => {
  if (!checkCoPrime(a, 26)) throw new Error('a and m must be coprime.');

  const sanitizedPhrase = phrase.replace(/[\s.,]/g, '');

  const cipherText = [...sanitizedPhrase].map(char =>
    alphabet.includes(char.toLowerCase())
      ? alphabet[(a * alphabet.indexOf(char.toLowerCase()) + b) % 26]
      : char
  ).join('');

  return cipherText.match(/.{1,5}/g).join(' ');
};


export const decode = (phrase, { a, b }) => {
  if (!checkCoPrime(a, 26)) throw new Error('a and m must be coprime.');


  const aInv = mmi(a, 26);
  const plainText = [...phrase].map(char =>
    alphabet.includes(char.toLowerCase())
      ? alphabet[((aInv * (alphabet.indexOf(char.toLowerCase()) - b) + 26) % 26 + 26) % 26]
      : char
  ).join('');

  const modifiedPT = plainText.replace(/\s+/g, '');
  return modifiedPT;
};