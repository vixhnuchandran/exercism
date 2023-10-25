//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {

  constructor(ele) {
    this._element = ele;
    this._next = null;
  }
  get value() {
    return this._element
  }
  get next() {
    return this._next
  }
}


export class List {
  constructor(arr = []) {
    this._list = [];
    this._head = null;

    for (let i = 0; i < arr.length; i++) {
      let element = new Element(arr[i])
      this.add(element);
    }
  }

  add(nextValue) {
    this._list.push(nextValue);

    if (this._head === null) {
      this._head = nextValue;
    }
    else {
      nextValue._next = this._head;
      this._head = nextValue;
    }
  }

  get length() {
    return this._list.length
  }

  get head() {
    return this._head
  }

  toArray() {
    const result = [];
    let current = this._head;
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result
  }

  reverse() {
    return new List(this.toArray());
  }
}