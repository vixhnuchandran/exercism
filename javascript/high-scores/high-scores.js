//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scoreList) {
    this.scoreList = scoreList;
  }

  get scores() {
    return this.scoreList;
  }

  get latest() {
    return this.scoreList[this.scoreList.length - 1];
  }

  get personalBest() {
    return Math.max(...this.scoreList);
  }

  get personalTopThree() {
    return this.scoreList.sort((a, b) => b - a).slice(0, 3);

  }
} 