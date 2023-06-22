import { combineReducers } from '@reduxjs/toolkit';
import task from './taskSlice'
const rootReducer = combineReducers({
    task
})
export default rootReducer;