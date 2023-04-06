import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./FilterSlice";
import SearchValueSlice from "./SearchValueSlice";
export const store = configureStore({
  reducer: {
    filters: FilterSlice,
    search: SearchValueSlice,
  },
});
