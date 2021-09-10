import React from 'react';

const DirectionFormWithWrapper = function ({changeId, listName, direction}) {


    return (
      <React.Fragment>
      <form id="directionForm" name={listName} onSubmit = {changeId}>
      <ul id={listName}>
      <li><button type="Submit" name="flexRow">1: Row</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexRowReverse">2: Reverse Row</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexColumn">3: Column</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexColumnReverse">4: Reverse Column</button></li>
    </ul>
    </form>
    </React.Fragment>
    )
}

export default(DirectionFormWithWrapper)