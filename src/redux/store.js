import { configureStore } from '@reduxjs/toolkit'
import offsetReducer from './slices/offsetSlice'
import jobListReducer from './slices/jobListSlice'
import filterReducer from './slices/filters/filterSlice'

export default configureStore({
  reducer: {
    offset:offsetReducer,
    jobList:jobListReducer,
    filter:filterReducer,
  }
})