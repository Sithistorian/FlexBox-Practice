import React from 'react';

const AddElement = function ({elementCount, direction}) {




  return (
    <React.Fragment>
    <li>{direction()}</li>
    <li><button type="Click" name="newElement">New Element</button></li>
    </React.Fragment>
  )
}

export default(AddElement);