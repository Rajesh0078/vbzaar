import { getCart } from "../../utils/firebaseFunctions"

export const userAction = (user) => {
    return {
        type: "SET_USER",
        user: user
    }
}

export const fetchCategorydata = (data) => {
    return {
        type: "FETCH_DATA",
        data: data
    }
}

export const getCartData = (email) => {
    return async (dispatch) => {
        try {
            const cartData = await getCart(email)
            dispatch({ type: "GET_CART_DATA", payLoad: cartData })
        } catch (error) {
            console.log(error)
        }
    }
}