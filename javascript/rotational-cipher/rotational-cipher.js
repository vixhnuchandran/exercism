//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export function isAlphabet(character)  {
  return /^[a-zA-Z]+$/.test(character);
}

export function rotateCharacter(char, rotX) {
  if (!isAlphabet(char)) {
      return char; // Keep non-alphabet characters unchanged
  }

  const isUppercase = char === char.toUpperCase();
  const alphabetStart = isUppercase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const charCode = char.charCodeAt(0);
  const rotatedCharCode = ((charCode - alphabetStart + rotX) % 26 + 26) % 26 + alphabetStart;

  return String.fromCharCode(rotatedCharCode);
}

export const rotate=(text, rotX) =>{
  let cipherText = '';

  for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const rotatedChar = rotateCharacter(char, rotX);
      cipherText += rotatedChar;
  }

  return cipherText;
};

