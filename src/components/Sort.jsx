import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSortType } from "../store/FilterSlice";
const sort = [
  { name: "популярности по убиванию", sort: "rating", type: "desc" },
  { name: "популярности по возрастанию", sort: "rating", type: "asc" },
  { name: "цене по убиванию", sort: "price", type: "desc" },
  { name: "цене по возрастанию", sort: "price", type: "asc" },
  { name: "алфавиту по убиванию", sort: "title", type: "desc" },
  { name: "алфавиту по возрастанию", sort: "title", type: "asc" },
];

function Sort({ value }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const ChangeSort = (item) => {
    setOpen(false);
    dispatch(setSortType(item));
  };
  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sort.map((item, i) => (
              <li
                key={i}
                onClick={() => ChangeSort(item)}
                className={value.name === item.name ? "active" : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
