//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.list = list || [];
  }

  compare(compareList) {
    let list1 = JSON.stringify(this.list).slice(1, -1);

    let list2 = JSON.stringify(compareList.list).slice(1, -1);

    if (list1 === list2) return "EQUAL";

    if (new RegExp(list1).test(list2)) return "SUBLIST";

    if (new RegExp(list2).test(list1)) return "SUPERLIST";

    return "UNEQUAL";
  }
}
