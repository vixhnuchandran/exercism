// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    #name;
    constructor() {
        this.generateNames = new Set();
        this.#name = this.generateUniqueName();
    }

    get name() {
        return this.#name;
    }

    getRandomAlphas() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet.charAt(randomIndex);
    }

    getRandomNums() {
        let c = '';
        for (let i = 0; i < 3; i++) {
            c += Math.floor(Math.random() * 10);
        }
        return c;
    }

    generateRandomName() {
        return this.getRandomAlphas() + this.getRandomAlphas() + this.getRandomNums();
    }

    generateUniqueName() {
        let newName;
        do {
            newName = this.generateRandomName();
        }
        while (this.generateNames.has(newName))

        this.generateNames.add(newName);
        return newName;
    }

    reset() {
        this.#name = this.generateUniqueName();
    }
}


Robot.releaseNames = () => { };