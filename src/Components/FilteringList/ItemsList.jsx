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
          className="bg-stone-200 rounded-lg p-1 ms-2 border-gray-400 border-2 focus:border-red-400 focus:outline-none"
          value={query}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}

function List({ items }) {
  return (
    <table className="text-2xl bg-lime-600 rounded-lg w-6/12">
      <tbody className="rounded-lg">
        <tr>
          <th>Dish</th>
          <th>Description</th>
        </tr>
        {items.map((food) => (
          <tr className="bg-stone-200" key={food.id}>
            <td className="ps-5">{food.name}</td>
            <td className="bg-stone-200 px-44 py-3">{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



const ItemsList = () => {
  const [ query, setQuery] = useState("");
  let filteredFoods;

  if (query) filteredFoods = filterItems(foods, query);

const filteredResults = query && filteredFoods.length > 0 ? (
    <List items={filteredFoods} />
  ) : (
    "Item does not exist"
  );

  return (
    <>
      <SearchBar setQuery={setQuery} query={query} />
      <hr />

      {query ? (
        filteredResults
      ) : (
        <List items={foods} />
      )}

    </>
  );
};

export default ItemsList;
