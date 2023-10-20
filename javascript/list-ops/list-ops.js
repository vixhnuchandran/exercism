//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.values = list;
  }


  append(list2) {
    this.values = [...this.values, ...list2.values];
    return this;
  }

  concat(lists) {
    const newList = this.values;
    for (const each of lists.values) {
      for (const item of each.values) {
        newList.push(item);
      }
    }
    this.values = newList;
    return this;
  }

  filter(fn) {
    const newList = [];
    for (const listItem of this.values) {
      if (fn(listItem)) newList.push(listItem);
    }
    this.values = newList;
    return this;
  }

  map(fn) {
    const newList = [];
    for (let i = 0; i < this.length(); i++) {
      newList.push(fn(this.values[i]));
    }
    this.values = newList;
    return this;
  }

  length() {
    let length = 0;
    for (const listItem of this.values) {
      length++;
    }
    return length;
  }

  foldl(fn, start) {
    let acc = start;
    for (let i = 0; i < this.length(); i++) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  foldr(fn, start) {
    let acc = start;
    for (let i = this.length() - 1; i >= 0; i--) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const newList = [];
    for (const listItem of this.values) {
      newList.unshift(listItem);
    }
    this.values = newList;
    return this;
  }
}
