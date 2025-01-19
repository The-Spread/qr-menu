import { useState } from "react";
import Dropdown from "../components/Dropdown";

import {
  breakfastMenu,
  snackMenu,
  saladMenu,
  italianMenu,
  sandwichMenu,
  mainsMenu,
} from "../assets/constants";

export default function EnglishMenu() {
  const [vegetarianFilter, setVegetarianFilter] = useState(false);
  const [spicyFilter, setSpicyFilter] = useState(false);

  return (
    <div className="p-8">
      Filters
      <div
        className="flex gap-2"
        onClick={() => setVegetarianFilter(!vegetarianFilter)}
      >
        <input
          name="vegetarianFilter"
          type="checkbox"
          checked={vegetarianFilter}
        />
        <label htmlFor="vegetarianFilter">Vegetarian</label>
      </div>
      <div className="flex gap-2" onClick={() => setSpicyFilter(!spicyFilter)}>
        <input name="spicyFilter" type="checkbox" checked={spicyFilter} />
        <label htmlFor="spicyFilter">Spicy</label>
      </div>
      <Dropdown
        category_title={"Breakfast"}
        menu={breakfastMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Snacks"}
        menu={snackMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Salad"}
        menu={saladMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Italian"}
        menu={italianMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Sandwiches & Burgers"}
        menu={sandwichMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Mains"}
        menu={mainsMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
    </div>
  );
}
