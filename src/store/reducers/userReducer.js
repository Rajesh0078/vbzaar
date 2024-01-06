import { fetchUser } from "../../utils/fetchLocalStorage"

const initialState = {
    user: fetchUser()
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default userReducer