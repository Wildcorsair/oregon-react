import React, {Component} from 'react';

class List extends Component {

  constructor(props) {
    super(props);
  }

  update() {
    console.log('List updated!');
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
