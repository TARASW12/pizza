import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/FilterSlice";
const typePizza = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
function Categories({ value }) {
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <ul>
        {typePizza.map((title, index) => (
          <li
            onClick={() => dispatch(setCategory(index))}
            key={index}
            className={value === index ? "active" : ""}
          >
            {title}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}

export default Categories;
