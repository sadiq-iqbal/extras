import iceCreamActions from "./iceCreamActions"

const initialState = {
    numberOfIceCreams: 10
}
const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case iceCreamActions.BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        case iceCreamActions.INCREMENT_ICECREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + 1
            }
        default:
            return state
    }
}

export default iceCreamReducer