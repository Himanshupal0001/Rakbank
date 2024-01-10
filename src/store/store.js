import { configureStore } from "@reduxjs/toolkit";
import pollReducer from './PollSlice'
export const store = configureStore({
    reducer: {
        poll: pollReducer,
    }
})