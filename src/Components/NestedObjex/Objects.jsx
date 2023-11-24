import React from 'react'

import { useState } from 'react';
import { initialTravelPlan } from './Places.js';



function PlaceTree({ id, parentId, placesById, onComplete }) {  //this gets called recursivley as many times equal to size of childID arrays
             //1, 42, 46    0      //fullplanobj    
    const place = placesById[id];
    const childIds = place.childIds;
    return (
      <li className='my-4'>
        {place.title}
        <button className='bg-red-300 mx-2' onClick={() => {
          onComplete(parentId, id);
        }}>
          Complete
        </button>
        {childIds.length > 0 &&
          <ol>
            {childIds.map(childId => (
              <PlaceTree
                key={childId}
                id={childId}
                parentId={id}
                placesById={placesById}
                onComplete={onComplete}
              />
            ))}
          </ol>
        }
      </li>
    );
  }
  



export default function Objects() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds
        .filter(id => id !== childId)
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent
    });
  }

  const root = plan[0];
//root
//    0: { id: 0,
//     title: '(Root)',
//     childIds: [1, 42, 46],
//   }
  const planetIds = root.childIds; //[1, 42, 46]
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id} // 1, 42, 46
            id={id} // 1, 42, 46
            parentId={0} 
            placesById={plan} //full places object
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

