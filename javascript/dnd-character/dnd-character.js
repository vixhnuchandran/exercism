//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (n) => {
  if (n<3)  throw new Error('Ability scores must be at least 3');
  if (n>18)  throw new Error('Ability scores can be at most 18');
  return Math.floor((n - 10) / 2)
};


export class Character {  
  static rollAbility() {
    let rollArr = []
    let rolls = 4
    for (let i = 0; i < rolls; i++) {
      let roll = Math.floor((Math.random() * 6) + 1)
      rollArr.push(roll)
    }
    rollArr.sort((a,b) => a-b);
    let score = 0
    for (let i = 1; i < rolls; i++) {
      score += rollArr[i];
    }
    return score;
  } 
  get strength() {
    if (this._strength === undefined) {
      this._strength = Character.rollAbility();
    }
    return this._strength
  }
  get dexterity() {
    if (this._dexterity === undefined) {
      this._dexterity = Character.rollAbility();
    }
    return this._dexterity
  }
  get constitution() {
    if (this._constitution === undefined) {
      this._constitution = Character.rollAbility();
    }
    return this._constitution
  }
  get intelligence() {
    if (this._intelligence === undefined) {
      this._intelligence = Character.rollAbility();
    }
    return this._intelligence
  }
  get wisdom() {
    if (this._wisdom === undefined) {
      this._wisdom = Character.rollAbility();
    }
    return this._wisdom
  }
  get charisma() {
    if (this._charisma === undefined) {
      this._charisma = Character.rollAbility();
    }
    return this._charisma
  }
  get hitpoints() {
    return 10 + abilityModifier(this.constitution)
  }
}