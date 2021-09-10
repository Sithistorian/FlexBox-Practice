import React from 'react';

const AddElement = function ({elementCount, direction, listName, incrementCount}) {

  let numArray = new Array(elementCount);
  numArray.fill(1);

  return (
    <React.Fragment>
      {
        numArray.map((num)=> {

          return (
          <React.Fragment>
          <li>{direction()}</li>
          <li><button type="Click" name={listName} onClick={incrementCount}>New Element</button></li>
          </React.Fragment>
    )
        })
      }

    </React.Fragment>
  )
}

export default(AddElement);