//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  #hours
  #minutes
  constructor(hours, minutes) {
      this.#hours = hours;
      this.#minutes = minutes || 0;
      this.normalize();
  }

  toString() {
      const hoursString = String(this.#hours).padStart(2, '0');
      const minutesString = String(this.#minutes).padStart(2, '0');
      return `${hoursString}:${minutesString}`;
  }

  normalize() {
      while (this.#minutes < 0) {
          this.#minutes += 60;
          this.#hours -= 1;
      }
      while (this.#minutes >= 60) {
          this.#minutes -= 60;
          this.#hours += 1;
      }
      while (this.#hours < 0) {
          this.#hours += 24;
      }
      this.#hours %= 24;
  }


  plus(val) {
      this.#minutes += val;
      this.normalize();
      return this.toString();
  }

  minus(val) {
      this.#minutes -= val;
      this.normalize();
      return this.toString();
  }

  equals(newClock) {
  return this.toString() === newClock.toString();

}
}