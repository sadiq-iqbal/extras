import actions from "./cakeActions";

export const buyCake = (number = 1) => {
    return {
        type: actions.BUY_CAKE,
        payload: number
    }
}

export const incrementCake = () => {
    return {
        type: actions.INCREMENT_CAKE
    }
}   