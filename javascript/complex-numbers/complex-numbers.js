//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(...args) {
      this._real = args[0];
      this._imag = args[1];
  }
  get real() {
      return this._real;
  }
  get imag() {
      return this._imag;
  }
  add(second) {
      return new ComplexNumber(this._real + second.real, this._imag + second.imag);
  }
  sub(second) {
      return new ComplexNumber(this._real - second.real, this._imag - second.imag);
  }
  div(second) {
      let fNum = ((this._real * second.real) + (this._imag * second.imag)) / (second.real ** 2 + second.imag ** 2);
      let sNum = ((this._imag * second.real) - (this._real * second.imag)) / (second.real ** 2 + second.imag ** 2);
      return new ComplexNumber(fNum, sNum)
  }
  mul(second) {

      let fNum = (this._real * second.real) - (this._imag * second.imag);
      let sNum = ((this._imag * second.real) + (this._real * second.imag));
      return new ComplexNumber(fNum, sNum);
  }

  get abs() {
      return Math.sqrt(this._real ** 2 + this._imag ** 2);
  }

  get conj() {

      return new ComplexNumber(this._real, this._imag !== 0 ? -this._imag : 0);

  }


  get exp() {

    return new ComplexNumber(
      this._imag !== 0 ? Math.exp(this._real) * Math.cos(this._imag) : Math.exp(this._real),
      this._imag !== 0 ? Number(Math.sin(this._imag).toFixed()) : 0
    );
    

}
}
