import React from 'react';
import DirectionForm from './DirectionForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: 'flexRow'
    }

    this.changeID = this.changeID.bind(this);
    this.direction = this.direction.bind(this);
  }

  changeID (e) {
    e.preventDefault();
    this.setState( {
      listName: e.nativeEvent.submitter.name
    })
  }

  direction () {
    let direction = this.state.listName;
    if (direction === 'flexRow') {
      return '>'
    }
    if (direction === 'flexRowReverse') {
      return '<'
    }
    if (direction === 'flexColumn') {
      return 'v'
    }
    if (direction === 'flexColumnReverse') {
      return '^'
    }
  }


  render () {
    return (
      <DirectionForm changeId={this.changeID} listName={this.state.listName} direction={this.direction}/>
    )
  }

}


export default App;
