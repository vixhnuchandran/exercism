//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    const isSharp = Scale.sharpKeys.has(tonic);
    this.notes = isSharp ? Scale.sharps : Scale.flats;
    this.root = this.findNoteIndex(tonic);
    if (this.root === -1) {
      throw new Error(`"${tonic}" is not a valid tonic.`);
    }
  }

  chromatic() {
    return this.interval('mmmmmmmmmmm');
  }

  interval(intervals) {
    let index = this.root;
    const result = [this.notes[index]];

    for (const interval of intervals) {
      index = (index + Scale.intervalMap.get(interval)) % 12;
      result.push(this.notes[index]);
    }

    return result;
  }

  findNoteIndex(tonic) {
    const noteToFind = tonic[0].toUpperCase() + tonic.slice(1);
    return this.notes.indexOf(noteToFind);
  }
}

Scale.sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
Scale.flats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
Scale.sharpKeys = new Set(['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#']);
Scale.intervalMap = new Map([
  ['m', 1],
  ['M', 2],
  ['A', 3],
]);
