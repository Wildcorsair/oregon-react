/**
 * Class implements Publisher Subscriber pattern.
 */
class ObserverList {

  constructor() {
    this.list = [];
  }

  add(obj) {
    return this.list.push(obj);
  }

  get(index) {
    if (index > -1 && index < this.list.length) {
      return this.list[index];
    }
  }

  remove(index) {
    return list.slice(index, 1);
  }

  indexOf(obj, startIndex) {
    let i = startIndex;

    while (i < this.count()) {
      if (this.list[i] === obj) {
        return i;
      }
      i++;
    }
    return -1;
  }

  count() {
    return this.list.length;
  }

}

export default ObserverList;
