//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(values = []) {

    this.set = Array.from(values);
  }

  empty() {
    return this.set.length === 0;
  }

  contains(num) {

    return this.set.includes(num)
  }

  add(add) {
    if (!this.set.includes(add)) {
      this.set.push(add);
    }
    return new CustomSet(this.set);
  }

  subset(sub) {
    return this.set.every(element => sub.set.includes(element));
  }

  disjoint(check) {
    for (let element of check.set) {
      if (this.set.includes(element)) {
        return false;
      }
    }
    return true;
  }

  eql(check) {
    const actualArray = this.set.sort();
    const expectedArray = check.set.sort();
    const actualJSON = JSON.stringify(actualArray);
    const expectedJSON = JSON.stringify(expectedArray);
    return actualJSON === expectedJSON;
  }

  union(set2) {
    const combined = new Set([...this.set, ...set2.set]);
    return new CustomSet(combined);
  }

  intersection(inter) {
    let intersect = [];
    for (let element of this.set) {
      if (inter.set.includes(element)) {
        intersect.push(element);
      }
    } 
    return new CustomSet(intersect);
  }

  difference(diff) {
    let differ = [];
    for (let element of this.set) {
      if (!diff.set.includes(element)) {
        differ.push(element);
      }
    } 
    return new CustomSet(differ);
  }
}
