// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    #name;
    #usedNames = new Set();
    constructor() {
        this.#name = this.generateRandomName();
    }

    get name() { return this.#name; }
    getRandomAlphas() { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]; }
    getRandomNums() { return String(Math.floor(Math.random() * 1000)).padStart(3, '0'); }
    generateRandomName() { let newName; 
        do { newName = `${this.getRandomAlphas()}${this.getRandomAlphas()}${this.getRandomNums()}`; } while (this.#usedNames.has(newName)); this.#usedNames.add(newName); return newName; }

    reset() { this.#name = this.generateRandomName(); }
}

Robot.releaseNames = () => { };