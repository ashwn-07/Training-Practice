import React, { useEffect, useState } from "react";

const TheClock = ({ currentColor, status }) => {


  //here wat happens without status prop is that the component wont be aware of the color change, like to trigger the effect

  // useEffect(() => {
  //   setColor(currentColor);
  // }, [currentColor]); 
  //if we use something like this it would go in infinite render loop

//this is one way, a twisted way of doing this actually we don't need state and effects for this.

  const [color, setColor] = useState();

  useEffect(() => {
    setColor(currentColor);
  }, [status]);
//rrtrt chnage to twqrwer
  return (
    <div>
      <h1 style={{ color }}> helloo </h1>
    </div>
  );
};

export default TheClock;
