import React, { useState } from "react";

const ProfileEdit = () => {
  const [name, setName] = useState({firstName:"Jane", lastName:"jacobs"});
  const [editClicked, setEditClicked] = useState(false);


  return (
    <>
      <main className="h-screen flex  justify-center w-screen">
        <form className="flex flex-col h-fit p-32 space-y-14 rounded-2xl">
          <label>
            First name:
            {editClicked ? (
              <input
                className="mx-2 p-1 rounded-lg bg-stone-300"
                onChange={(e) => setName({
                  ...name,
                  firstName:e.target.value
                })}
                value={name.firstName}
              />
            ) : (
              <b>{name.firstName}</b>
            )}
          </label>

          <label>
            Last name:
            {editClicked ? (
              <input
                className=" mx-2 p-1 rounded-lg bg-stone-300"
                
                onChange={(e) => setName({
                  ...name,
                  lastName:e.target.value
                })}
                value={name.lastName}
              />
            ) : (
              <b>{name.lastName}</b>
            )}
          </label>

          <button
            className="bg-lime-600 w-24 p-1 rounded text-white"
            onClick={(e) => {
              e.preventDefault();

              setEditClicked((curr) => !curr);
            }}
          >
            {editClicked ? "save" : "Edit Profile"}
          </button>

          <p>
            <i className="text-2xl">
              {" "}
              Hello, {name.firstName} {name.lastName}
            </i>
          </p>
        </form>
      </main>
    </>
  );
};

export default ProfileEdit;
