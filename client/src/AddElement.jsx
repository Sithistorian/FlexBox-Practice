import React from 'react';

const AddElement = function ({elementCount, direction, listName}) {




  return (
    <React.Fragment>
    <li>{direction()}</li>
    <li><button type="Click" name={listName}>New Element</button></li>
    </React.Fragment>
  )
}

export default(AddElement);