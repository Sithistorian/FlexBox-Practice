import React from 'react';

const AddElement = function ({elementCount, direction, listName, incrementCount}) {

  let numArray = new Array(elementCount);
  numArray.fill(1);
  console.log('Count', elementCount, 'Const', 4, 'Array Length', numArray.length, 'Total', elementCount + 4 + numArray.length)

  return (
    <React.Fragment>
      {
        numArray.map((num, index)=> {

          return (
          <React.Fragment>
          <li>{direction()}</li>
          <li><button type="Click" name={listName} onClick={incrementCount}>{5 + index}: New Element</button></li>
          </React.Fragment>
    )
        })
      }

    </React.Fragment>
  )
}

export default(AddElement);