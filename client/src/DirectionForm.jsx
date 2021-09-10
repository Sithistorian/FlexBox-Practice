import React from 'react';
import AddElement from './AddElement'

const DirectionForm = function ({changeId, listName, direction, elementCount, incrementCount}) {


    return (
      <React.Fragment>
      <form id="directionForm" name="directionForm" onSubmit = {changeId}>
      <ul id={listName}>
      <li><button type="Submit" name="flexRow">1: Row</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexRowReverse">2: Reverse Row</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexColumn">3: Column</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexColumnReverse">4: Reverse Column</button></li>
      <AddElement elementCount={elementCount} direction={direction} listName={listName} incrementCount= {incrementCount}/>
    </ul>
    </form>
    </React.Fragment>
    )
}

export default(DirectionForm)