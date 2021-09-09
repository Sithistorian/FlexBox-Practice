import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: 'flexRow'
    }
  }


  render () {
    return (
      <ul Id={this.state.listName}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
    )
  }

}


export default App;
