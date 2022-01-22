import React from "react";
import Filter from "./Filter";

export default function Filters() {
  return (
    <ul className="ps-masonry__filter">
      {[
        "all",
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing",
      ].map((category) => (
        <Filter category={category}/>
      ))}
    </ul>
  );
}
