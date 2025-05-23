import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./ice_cream/iceCreamReducer";

export default combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})