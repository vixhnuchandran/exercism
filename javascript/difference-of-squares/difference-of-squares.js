//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.numList = Array.from({length : num}, (_,i) => i+1);
  }


  get sumOfSquares() {
    return this.numList.reduce((acc, value) => {acc += (value**2); return acc;}, 0);
  }

  get squareOfSum() {
     return (this.numList.reduce((acc, value) => {acc += value; return acc;}, 0)) ** 2;
  }
  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}