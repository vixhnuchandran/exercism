//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  #cipherText;
  constructor(plaintext) {
    this._plaintext = plaintext.replace(/[\s.@%!',]/g, "");
    this.length = this._plaintext.length;
    this.#cipherText = "";
  }

  get ciphertext() {
    if (this.length === 0) {
      return "";
    }

    const size = this.rowsAndColumns(this.length);
    const regex = new RegExp(`.{1,${size.c}}`, "g");
    const plaintextRectangle = this._plaintext.toLowerCase().match(regex);

    for (let i = 0; i < size.c; i++) {
      let j = 0;
      while (j < size.r) {
        this.#cipherText += plaintextRectangle[j][i]
          ? plaintextRectangle[j][i]
          : " ";
        j++;
      }
    }
    const regex2 = new RegExp(`.{1,${size.r}}`, "g");
    return this.#cipherText.match(regex2).join(" ");
  }

  rowsAndColumns(length) {
    length = this.length;
    let r, c;
    for (r = 1; r <= length; r++) {
      c = Math.ceil(length / r);
      if (c - r <= 1) {
        break;
      }
    }
    return { r, c };
  }
}

