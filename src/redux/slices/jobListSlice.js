import { createSlice } from '@reduxjs/toolkit'

export const jobListSlice = createSlice({
  name: 'jobList',
  initialState: {
    value: []
  },
  reducers: {
     jobListIncrement:(state,action) => {
      state.value = [...state.value,...action.payload]
    },
  }
})

// Action creators are generated for each case reducer function
export const {jobListIncrement} = jobListSlice.actions

export default jobListSlice.reducer