
const changeID = function (e) {
  e.preventDefault();
  if (e.target.name === 'directionForm') {
    this.setState( {
      listName: e.nativeEvent.submitter.name
    })
  }
  if (e.target.name === 'directionFormWrap') {
    this.setState( {
      listNameWrap: e.nativeEvent.submitter.name
    })
  }
}

const incrementCount = function () {
  let tally = this.state.elementCount + 1;
  this.setState({
    elementCount: tally
  })
}

module.exports = {
  changeID,
  incrementCount
}