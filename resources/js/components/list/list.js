import React, {Component} from 'react';
import Observer from './../../services/observer';

class List extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.token = Observer.subscribe('MY TOPIC', this.subscriber)
  }

  componentWillUnmount() {
    Observer.unsubscribe(this.token)
  }

  subscriber(msg, data) {
    console.log(msg, data)
    // set state etc...
  }

  render() {
      return(
        <div>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      );
  }

}

export default List;
