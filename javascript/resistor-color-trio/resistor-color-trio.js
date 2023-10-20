//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const colors = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
};

export class ResistorColorTrio {
  constructor(colorSeq) {
      let [fdigit, sdigit, zeros] = colorSeq
      this.unit ;
      this.value;
      if (colorSeq.some(color => colors[color] === undefined)) {
          throw new Error('invalid color');
      }
      this.result = String(colors[fdigit]) + String(colors[sdigit]) + '0'.repeat(colors[zeros]);
      this.unit = this.result.length > 3 ? 'kiloohms': 'ohms';
      this.value = this.result.length > 3 ? this.result.slice(0, this.result.length-3) : this.result;
      
  }

  get label() {
    return `Resistor value: ${this.value } ${this.unit}`;
  }
}