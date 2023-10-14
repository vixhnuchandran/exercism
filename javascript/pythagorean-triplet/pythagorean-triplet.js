//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor, maxFactor, sum }) {
  let tripletsArray = [];

  const minA = minFactor || 1;
  const maxA = maxFactor || sum;

  for (let a = minA; a < maxA; a++) {
    for (let b = a; b < maxA; b++) {
      const c = Math.sqrt(a ** 2 + b ** 2);

      const isWithinConstraints = 
        (!minFactor || c > minFactor) &&
        (!maxFactor || c < maxFactor);

      if (a + b + c === sum && isWithinConstraints) {
        tripletsArray.push(new Triplet(a, b, c));
      }
    }
  }

  return tripletsArray;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
