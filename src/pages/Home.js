import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../store/FilterSlice";
import Pagination from "../Pagination";
import axios from "axios";
export const Home = () => {
  const dispatch = useDispatch();
  const {
    sortValue: sortType,
    categoryValue: category,
    currentPage,
  } = useSelector((state) => state.filters);
  const searchValue = useSelector((state) => state.search.searchValue);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const titleValue = !!searchValue.length ? `title=${searchValue}` : "";
  const categoryQuery = category > 0 && `category=${category}`;
  const sortQuery = `sortBy=${sortType.sort}&order=${sortType.type}`;

  const changePage = (num) => dispatch(setCurrentPage(num));
  const fetchPizzas = async () => {
    const { data } = await axios.get(
      `https://63dfa25459bccf35dab69cc2.mockapi.io/items?page=${currentPage}&limit=4&${titleValue}&${categoryQuery}&${sortQuery}`
    );
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPizzas();
  }, [category, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={category} />
        <Sort value={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : data.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
      <Pagination onChangePage={changePage} />
    </div>
  );
};
