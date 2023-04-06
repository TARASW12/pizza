import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryValue: 0,
  currentPage: 1,
  sortValue: {
    name: "популярности",
    sort: "rating",
  },
};

export const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoryValue = action.payload;
    },
    setSortType: (state, action) => {
      state.sortValue = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategory, setSortType, setCurrentPage } = FilterSlice.actions;

export default FilterSlice.reducer;
