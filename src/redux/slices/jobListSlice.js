import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice for managing the job list state
export const jobListSlice = createSlice({
  name: 'jobList', // Name of the slice
  initialState: {
    value: [] // Initial state with an empty array for the job list
  },
  reducers: {
    // Reducer function to increment the job list with new job items
    jobListIncrement: (state, action) => {
      // Update the job list state by appending new job items
      state.value = [...state.value, ...action.payload];
    },
  }
});

// Action creators are automatically generated for each case reducer function
export const { jobListIncrement } = jobListSlice.actions;

// Export the reducer function for the job list slice
export default jobListSlice.reducer;
