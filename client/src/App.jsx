import React from 'react';
import DirectionForm from './DirectionForm';
import DirectionFormWithWrapper from './DirectionFormWithWrapper';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: 'flexRow',
      elementCount: 0
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
      <React.Fragment>
      <DirectionForm changeId={this.changeID} listName={this.state.listName} direction={this.direction}/>
      <section>
        <h1>This section displays the flex-direction with wrapper</h1>
        <DirectionFormWithWrapper changeId={this.changeID} listName={this.state.listName} direction={this.direction} elementCount={this.state.elementCount}/>
      </section>
      </React.Fragment>
    )
  }

}


export default App;
