import React from "react";
import { people } from "./data2.js";
import { getImageUrl } from "./Util2.js";

const Chemists = () => {
  return (
    <ul>
      {people
        .filter((person) => person.profession === "chemist")
        .map((person) => (
          <li key={person.id}>
            <img className="rounded-full" src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
    </ul>
  );
};

const Rest = () => {
  return (
    <ul>
      {people
        .filter((person) => !(person.profession === "chemist"))
        .map((person) => (
          <li key={person.id}>
            <img className="rounded-full" src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
    </ul>
  );
};

const Scientists = () => {
  return (
    <section className="pt-64">
      <h1 className="text-center text-4xl">Scientists</h1>

      <div className="flex space-x-32 ps-64">
      <article>
        <h4>Chemists</h4>
        <Chemists />
      </article>

      <article>
        <h4 >Everyone Else</h4>
        <Rest />
      </article>
      </div>
    </section>
  );
};

export default Scientists;
