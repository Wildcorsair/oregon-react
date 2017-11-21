import React, {Component} from 'react';

class ToolBar extends Component {

  constructor(props) {
    super(props);
  }

  clickAddItem() {
    console.log('Click');
  }

  render() {
    return(
      <div>
        <h2>Text from component</h2>
        <div><button onClick={this.clickAddItem}>Add Item</button></div>
      </div>
    );
  }

}

export default ToolBar;
