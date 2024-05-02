import { configureStore } from '@reduxjs/toolkit'
import offsetReducer from './slices/offsetSlice'
import jobListReducer from './slices/jobListSlice'

export default configureStore({
  reducer: {
    offset:offsetReducer,
    jobList:jobListReducer
  }
})