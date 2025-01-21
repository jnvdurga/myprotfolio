import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import rootSlice from './rootSlice'

const reducer  = combineReducers({
    root:rootSlice
})


export const store = configureStore({
  reducer,
})

export default store