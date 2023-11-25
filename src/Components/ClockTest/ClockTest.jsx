import React, { useEffect, useState } from "react";
import TheClock from "./TheClock";

const ClockTest = () => {

  const [selected, setSelected] = useState("red");
  const [changed, setChanged] = useState(0);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setChanged((curr) => !curr);
  };

  return (
    <div>
      <select id="color-select" onChange={handleChange}>
        <option value= "red">red</option>
        <option value= "green">green</option>
        <option value= "yellow">yellow</option>
        <option value= "violet">Blue</option>
      </select>

      <TheClock currentColor={selected} status={changed} /> { /* here the reason for using status prop is for triggering the effects on each render of the component,---> refer TheClock component*/}
    </div>
  );
};

export default ClockTest;
