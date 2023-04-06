import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const SearchValueSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
      console.log(state, action);
    },
  },
});

export const { setSearchValue } = SearchValueSlice.actions;

export default SearchValueSlice.reducer;
