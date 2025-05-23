const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            console.log(state);
            state.count++
        },
        decrement: (state) => {
            state.count--
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer;
