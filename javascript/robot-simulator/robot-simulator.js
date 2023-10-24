//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this.newDirection = 'north';
    this.newX;
    this.newY;
  }

  get bearing() {
    return this.newDirection
  }

  get coordinates() {
    return [this.newX, this.newY]
  }

  place({ x, y, direction }) {
    if (['north', 'east', 'south', 'west'].includes(direction)) { this.newDirection = direction; }
    else { throw new InvalidInputError() }
    this.newX = x;
    this.newY = y;
  }

  evaluate(instructions) {
    instructions = [...instructions]
    instructions.forEach((i) => {
      switch (i) {
        case "R":
          if (this.newDirection === 'north') {
            this.newDirection = 'east';
          } else if (this.newDirection === 'west') {
            this.newDirection = 'north';
          } else if (this.newDirection === 'south') {
            this.newDirection = 'west';
          } else if (this.newDirection === 'east') {
            this.newDirection = 'south';
          };
          break;
        case "L":
          if (this.newDirection === 'north') {
            this.newDirection = 'west';
          } else if (this.newDirection === 'west') {
            this.newDirection = 'south';
          } else if (this.newDirection === 'south') {
            this.newDirection = 'east';
          } else if (this.newDirection === 'east') {
            this.newDirection = 'north';
          };
          break;
        case "A":
          if (this.newDirection === 'north') {
            this.newY++
          } else if (this.newDirection === 'west') {
            this.newX--
          } else if (this.newDirection === 'south') {
            this.newY--
          } else if (this.newDirection === 'east') {
            this.newX++
          };
          break;
      }
    });
  }
}