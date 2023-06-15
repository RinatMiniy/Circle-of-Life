import { configureStore } from "@reduxjs/toolkit";
import { monthsDataReducer } from "./monthsDataSlice";

export const store = configureStore({
  reducer: {
    monthsData: monthsDataReducer,
  }
})