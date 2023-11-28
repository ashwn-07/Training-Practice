import React from "react";
import { useState } from "react";
import { initialTravelPlan } from "./places.js";

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;

  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol >
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

//1st 

const ViewTree = () => {
  const [plan, setPlan] = useState(initialTravelPlan); //gets the full places object
  const planets = plan.childPlaces; 
  
  //gets the nested child places ie, earth, moon, mars
  //plantes is an arrray like, [earth, mars, moon] where all of these are objects with another nested children array inside them

  return (
    <>
      <h2>Places to visit</h2>
      <ol >
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} /> // this is like ex for earth { id:0, children:[array of countires in earth as continents which contains another children array of its countries]} which is like  **planets = [{title, id, children:[{title, id, children:[]}]}**

          //for moon:    <li>moon 
                        // <ol> 
                        //    <li>ry
                        //       <ol>
                        //           <li></li>
                        //           <li></li>
                        //           <li></li>
                        //       <ol/>
                        //    <li/>
                          //<li>
                          //pi
                          //</li>
                          // <li>
                          //   try
                          // </li>
                        // <ol/> 
                      //<li/>
        ))}
      </ol>
    </>
  );
};

export default ViewTree;
