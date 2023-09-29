//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.uniqueValues = [...new Set(sides)];
    this.sides = [...sides];
  }

  uniqueValues;
  sides;

  get isEquilateral() {
    if(this. isDegenerate() && this.uniqueValues.length === 1 && this.uniqueValues.indexOf(0) == -1 ) return true;
      else return false;
  }

  get isIsosceles() {
    if(this. isDegenerate() && (this.uniqueValues.length === 2 || this.uniqueValues.length === 1)) return true;
      else return false;
  }

  get isScalene() {
    if(this. isDegenerate() && this.uniqueValues.length === 3) return true;
      else return false;
  }

  isDegenerate(){
    let [l, b, h] = [...this.sides];
    
    if ( (l + b >= h) && (b + h >= l) && (l + h >= b)) return true;
    else return false;
  }
}