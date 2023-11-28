import React, { useState } from "react";
import { foods, filterItems } from "./data4";

function SearchBar({ setQuery, query }) {
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <section className="spacing-x-11 mb-12 mt-12">
      <label>
        Search:{" "}
        <input
          className="bg-stone-200 rounded-lg p-1 ms-2 border-gray-400 border-2"
          value={query}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}

function List({ items }) {
  return (
    <table className="bg-lime-600">
      <tbody className="">
        {items.map((food) => (
          <tr className="" key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const ItemsList = () => {
  const [query, setQuery] = useState("");
  let filteredFoods;

  if (query) filteredFoods = filterItems(foods, query);
  return (
    <>
      <SearchBar setQuery={setQuery} query={query} />
      <hr />
      <List items={!query ? foods : filteredFoods} />
    </>
  );
};

export default ItemsList;
