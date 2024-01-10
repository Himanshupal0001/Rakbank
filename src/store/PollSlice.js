import { createSlice } from "@reduxjs/toolkit";
import POLLFORM from '../utils/poll.json'
const initialState = {
    currentIndex: 0,
    formData: [],
    pollForm: POLLFORM
}

const PollSlice = createSlice({
    name: 'poll',
    initialState,
    reducers: {
        handleNextIndex: (state, action) => {
            return {
                ...state,
                currentIndex: (state.currentIndex + 1) % (state.pollForm.length + 1),
                formData: [...state.formData, action.payload]
            }
        },
    }
})

export const { handleNextIndex } = PollSlice.actions;
export default PollSlice.reducer;