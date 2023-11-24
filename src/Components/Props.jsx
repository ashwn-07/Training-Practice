import React from "react";

import Profile from "./Profile";

// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

const Props = () => {
  return (
    <div>
      <h1 className="text-3xl">Notable Scientists</h1>

      <div className="flex  w-full space-x-11 justify-center h-screen items-center">
      <Profile
        name={"physicist and chemist"}
        profession={"geochemist"}
        awards={4}
        description={
          "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        }
        discovery={"polonium (chemical element)"}
        imgUrl={'szV5sdG'}
      />
      <Profile
        name={"Katsuko Saruhashi"}
        profession={"geochemist"}
        awards={2}
        description={"Miyake Prize for geochemistry, Tanaka Prize"}
        discovery={"a method for measuring carbon dioxide in seawater"}
        imgUrl={'YfeOqp2'}
      />
      </div>
    
    </div>
  );
};

export default Props;
