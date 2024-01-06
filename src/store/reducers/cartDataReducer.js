
const initialState = {
    cartData: {}
}



export const getCartDatareducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART_DATA":
            return {
                ...state,
                cartData: action.payLoad
            }
        default:
            return state
    }
}

