import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filterRole',
  initialState: {
    value: {
        role: '',
        location: '',
        minExp: 0  ,
        minPay:0,
        techStack: '',
        companyName: '',
        workMode:''
    }
  },
  reducers: {
     setFilters:(state,action) => {
      state.value = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const {setFilters} = filterSlice.actions

export default filterSlice.reducer