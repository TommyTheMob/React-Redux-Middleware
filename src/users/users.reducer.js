import {SHOW_SPINNER, USER_DATA_RECEIVED} from './users.actions'

const initialState = {
    isFetching: false,
    userData: null,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER: {
            return {
                ...state,
                isFetching: true
            }
        }
        case USER_DATA_RECEIVED: {
            return {
                ...state,
                isFetching: false,
                userData: action.payload.userData
            }
        }
        default:
            return state
    }
}