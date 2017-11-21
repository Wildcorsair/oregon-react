class Observer {

  update() {
    console.log('Observer update!');
    this.changeState();
  }

  changeState() {
    console.log('Observer chnaged state!');
  }

}

export default Observer;
