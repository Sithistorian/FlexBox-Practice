import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: 'flexRow'
    }

    this.changeID = this.changeID.bind(this);
  }

  changeID (e) {
    e.preventDefault();
    this.setState( {
      listName: e.nativeEvent.submitter.name
    })
  }


  render () {
    return (
      <form name={this.state.listName} onSubmit = {this.changeID}>
      <ul id={this.state.listName}>
      <li><button type="Submit" name="flexRow">1: Row</button></li>
      <li><button type="Submit" name="flexRowReverse">2: Reverse Row</button></li>
      <li><button type="Submit" name="flexColumn">3: Column</button></li>
      <li><button type="Submit" name="flexColumnReverse">4: Reverse Column</button></li>
    </ul>
    </form>
    )
  }

}


export default App;
