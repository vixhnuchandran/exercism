//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  #key;
  constructor(key) {

    if (key === undefined) {
      this.#key = this.generateRandomKey();
    }
    else {
      this.#key = key;
    }
  }

  encode(plaintext) {
    let cipherText = '';
    for (let i = 0; i < plaintext.length; i++) {
      const plaintextChar = plaintext[i];
      const keyChar = this.key[i % this.key.length]; 
      const shiftAmount = keyChar.charCodeAt(0) - 97; 
      const encodedCharCode = ((plaintextChar.charCodeAt(0) - 97 + shiftAmount) % 26) + 97;
      cipherText += String.fromCharCode(encodedCharCode);
    }
    return cipherText;
  }

  decode(cipherText) {

    let plaintext = '';
    for (let i = 0; i < cipherText.length; i++) {
      const plaintextChar = cipherText[i];
      const keyChar = this.key[i % this.key.length];
      const shiftAmount = keyChar.charCodeAt(0) - 97;
      const encodedCharCode = ((plaintextChar.charCodeAt(0) - 97 - shiftAmount+ 26) % 26) + 97;
      plaintext += String.fromCharCode(encodedCharCode);
    }
    return plaintext;
  }
  
  generateRandomKey() {
    const keyLength = 100;
    let key = '';
    for (let i = 0; i < keyLength; i++) {
      const randomAlphaCode = Math.floor((Math.random() * 26) + 97);
      key += String.fromCharCode(randomAlphaCode);
    }
    return key;


  }

  get key() {
    return this.#key;

  }
}
