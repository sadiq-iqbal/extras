export const gettingUser = () => {
    return {
        type: 'FETCHING_USERS'
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users,
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}