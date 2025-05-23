const { configureStore } = require("@reduxjs/toolkit");
const counterSlice = require("./features/user/userSlice")
const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default store