//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.rosterObj = {};
  }

  #getSortRoster() {
    const roster = {};
    for (const grade in this.rosterObj) {
      roster[parseInt(grade)] = [...this.rosterObj[grade]].sort();
    }
    return roster;
  }

  roster() {
    return ({ ...this.#getSortRoster() });
  }

  add(name, grade) {
    for (const existingGrade in this.rosterObj) {
      if (this.rosterObj[existingGrade].includes(name)) {
        if (existingGrade !== grade.toString()) {
          const index = this.rosterObj[existingGrade].indexOf(name);
          if (index !== -1) {
            this.rosterObj[existingGrade].splice(index, 1);
          }
        }
      }
    }

    if (!this.rosterObj[grade]) {
      this.rosterObj[grade] = [];
    }
    this.rosterObj[grade].push(name);
  }

  grade(num) {
    if (!this.rosterObj[num]) {
      return [];
    }

    return [...this.rosterObj[num]].sort();
  }
}