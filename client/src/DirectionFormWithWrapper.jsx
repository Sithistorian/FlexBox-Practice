import React from 'react';
import AddElement from './AddElement';

const DirectionFormWithWrapper = function ({changeId, listName, direction, elementCount}) {


    return (
      <React.Fragment>
      <form id="directionForm" name="directionFormWrap" onSubmit = {changeId}>
      <ul id={listName}>
      <li><button type="Submit" name="flexRowWrap">1: Row Wrap</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexRowReverseWrap">2: Reverse Row Wrap</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexColumnWrap">3: Column Wrap</button></li>
      <li>{direction()}</li>
      <li><button type="Submit" name="flexColumnReverseWrap">4: Reverse Column Wrap</button></li>
    <AddElement elementCount={elementCount} direction={direction} listName={listName}/>
    </ul>
    </form>
    </React.Fragment>
    )
}

export default(DirectionFormWithWrapper)