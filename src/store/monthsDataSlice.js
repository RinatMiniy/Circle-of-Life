import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchMonthsData = createAsyncThunk("monthsData/get", async () => {
  const response = await fetch(`http://localhost:3002/data`);
  const data = await response.json();
  console.log(data, "mydata")
  return data
})

const monthsDataSlice = createSlice({
  name: "monthsData",
  initialState:[],
  reducers:{

  },
  extraReducers(builder) {
    builder.addCase(fetchMonthsData.fulfilled, (state, action) => {

    });
  }
})

export { fetchMonthsData } 
export const monthsDataReducer = monthsDataSlice.reducer