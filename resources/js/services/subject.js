import ObserverList from './observer-list';

class Subject {

  constructor() {
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.remove(this.observers.indexOf(observer, 0));
  }

  notify(context) {
    console.log('Subject notify!!!');
    for (let i = 0; i < this.observers.count(); i++) {
      this.observers.get(i).update(context);
    }
  }

}

export default Subject;
