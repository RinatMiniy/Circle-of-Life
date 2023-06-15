import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchMonthsData = createAsyncThunk("monthsData/get", async () => {
  const response = await fetch(`http://localhost:3002/data`);
  const data = await response.json();
  return data
})

const monthsDataSlice = createSlice({
  name: "monthsData",
  initialState:[],
  extraReducers(builder) {
    builder.addCase(fetchMonthsData.fulfilled, (state, action) => {
      state.push(...action.payload)
    });
  }
})

export { fetchMonthsData } 
export const monthsDataReducer = monthsDataSlice.reducer