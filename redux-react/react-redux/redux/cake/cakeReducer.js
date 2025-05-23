import actions from "./cakeActions";

const initialState = {
    numberOfCakes: 10

}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }
        case actions.INCREMENT_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + 1
            }
        default:
            return state
    }
}