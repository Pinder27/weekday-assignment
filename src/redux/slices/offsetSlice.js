import { createSlice } from '@reduxjs/toolkit'

export const offsetSlice = createSlice({
  name: 'offset',
  initialState: {
    value: 0
  },
  reducers: {
    offsetIncrement: state => {
      state.value += 10
    },
  }
})

// Action creators are generated for each case reducer function
export const {offsetIncrement} = offsetSlice.actions

export default offsetSlice.reducer