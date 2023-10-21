const alphaObj = {
  a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10,
  l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20,
  v: 21, w: 22, x: 23, y: 24, z: 25
};
const checkCoPrime = (a, m) => {
  if (m === 0) {
    return a === 1;
  }
  return checkCoPrime(m, a % m);
}
const mmi = (a, m) => {
  for (let n = 0; n < m; n++) if ((a * n) % m == 1) return n;
};


export const encode = (phrase, key) => {
  const a = key.a;
  const b = key.b;
  let cipherText = '';

  if (!checkCoPrime(a, 26)) {
    throw new Error('a and m must be coprime.')
  }
  phrase = phrase.replace(/[\s.,]/g, '')
  for (let each of phrase) {
    if (Object.keys(alphaObj).includes(each.toLowerCase())) {
      let x = alphaObj[each.toLowerCase()]
      let charIndex = (a * x + b) % 26;
      cipherText += Object.keys(alphaObj).find(key => alphaObj[key] === charIndex)
    }
    else {
      cipherText += each;
    }
  }
  let modifiedCT = cipherText.replace(/(.{5})/g, "$1 ").trim();
  return modifiedCT
};


export const decode = (phrase, key) => {
  const a = key.a;
  const b = key.b;
  let plainText = "";

  if (!checkCoPrime(a, 26)) {
      throw new Error("a and m must be coprime.");
  }
  let aInv = mmi(a, 26);
  for (let each of phrase) {
      if (Object.keys(alphaObj).includes(each.toLowerCase())) {
          let y = alphaObj[each.toLowerCase()];
          let charIndex = ((aInv * (y - b) % 26) + 26) %26 ;
          plainText += Object.keys(alphaObj).find(
              (key) => alphaObj[key] === charIndex);
      } else {
          plainText += each;
      }
  }
  let modifiedPT = plainText.replace(/\s+/g,'')
  return modifiedPT;
};
