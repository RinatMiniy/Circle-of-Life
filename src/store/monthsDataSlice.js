import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchMonthsData = createAsyncThunk("monthsData/get", async () => {
  const response = await fetch(`http://localhost:3002/data`);
  const data = await response.json();
  return data
})

const updateMonthsData = createAsyncThunk("monthsData/update", async (newData) => {
  const response = await fetch(`http://localhost:3002/data/${newData.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
});
const data = await response.text()

return data;
})

const monthsDataSlice = createSlice({
  name: "monthsData",
  initialState:[],
  extraReducers(builder) {
    builder.addCase(fetchMonthsData.fulfilled, (state, action) => {
      state.push(...action.payload)
    });
    builder.addCase(updateMonthsData.fulfilled, (state, action) => {
      const payload = JSON.parse(action.payload)
      state[state.findIndex((elem) => elem.id === payload.id)] = payload
    });
  }
})

export { fetchMonthsData, updateMonthsData } 
export const monthsDataReducer = monthsDataSlice.reducer