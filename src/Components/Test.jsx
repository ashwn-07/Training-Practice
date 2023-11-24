import React, { useState } from "react";



let firstRender = true;

const Test = () => {
let initName;

    if(firstRender){
      [initName] = useState("Rudi");
      firstRender = false;
    }

    const [firstName, setFirstName] = useState(initName);
    const [lastName, setLastName] = useState("Yardley");

  return (
    
    <>
      <button className="bg-green-600" onClick={() => setFirstName("fred")}>show name</button>
      <p>{firstName} {lastName}</p>
      </>
  )
}

export default Test