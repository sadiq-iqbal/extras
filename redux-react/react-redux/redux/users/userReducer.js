import actions from "./userActions"
import { fetchUsersFailure, fetchUsersSuccess, gettingUser } from "./usersActionCreators"
import axios from "axios"
const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.FETCHING_USERS: {
            return {
                ...state,
                loading: true
            }
        }
        case actions.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case actions.FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export const fetchUsersActionCreator = () => {
    return function (dispatch) {
        dispatch(gettingUser())
        const response = axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => dispatch(fetchUsersSuccess(response.data)))
            .catch(error => dispatch(fetchUsersFailure(error.message)))
    }
}


export default userReducer  