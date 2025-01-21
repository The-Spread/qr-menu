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
import Filter from "../components/Filter";

export default function EnglishMenu() {
  const [vegetarianFilter, setVegetarianFilter] = useState(false);
  const [spicyFilter, setSpicyFilter] = useState(false);

  return (
    <div className="p-8">
      <Filter
        vegetarianFilter={vegetarianFilter}
        setVegetarianFilter={setVegetarianFilter}
        spicyFilter={spicyFilter}
        setSpicyFilter={setSpicyFilter}
      />

      <Dropdown
        category_title={"Breakfast"}
        available_time={"until 10:45am"}
        menu={breakfastMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Snacks"}
        available_time={"all-day"}
        menu={snackMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Salad"}
        available_time={"11am onwards"}
        menu={saladMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Italian"}
        available_time={"11am onwards"}
        menu={italianMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Sandwiches & Burgers"}
        available_time={"11am onwards"}
        menu={sandwichMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
      <Dropdown
        category_title={"Mains"}
        available_time={"11am onwards"}
        menu={mainsMenu}
        vegetarianFilter={vegetarianFilter}
        spicyFilter={spicyFilter}
      />
    </div>
  );
}
