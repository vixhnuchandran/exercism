//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.list = list;
  }

  get values() {
    return this.list;
  }

  append(list2) {
    this.list = [...this.list, ...list2.list];
    return this;
  }

  concat(lists) {
    const newList = this.list;
    for (const targetList of lists.list) {
      for (const listItem of targetList.list) {
        newList.push(listItem);
      }
    }
    this.list = newList;
    return this;
  }

  filter(fn) {
    const newList = [];
    for (const listItem of this.list) {
      if (fn(listItem)) newList.push(listItem);
    }
    this.list = newList;
    return this;
  }

  map(fn) {
    const newList = [];
    for (let i = 0; i < this.length(); i++) {
      newList.push(fn(this.list[i]));
    }
    this.list = newList;
    return this;
  }

  length() {
    let length = 0;
    for (const listItem of this.list) {
      length++;
    }
    return length;
  }

  foldl(fn, start) {
    let acc = start;
    for (let i = 0; i < this.length(); i++) {
      acc = fn(acc, this.list[i]);
    }
    return acc;
  }

  foldr(fn, start) {
    let acc = start;
    for (let i = this.length() - 1; i >= 0; i--) {
      acc = fn(acc, this.list[i]);
    }
    return acc;
  }

  reverse() {
    const newList = [];
    for (const listItem of this.list) {
      newList.unshift(listItem);
    }
    this.list = newList;
    return this;
  }
}
