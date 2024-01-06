import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import { dataReducer } from "./reducers/fetchReducer";
import { getCartDatareducer } from "./reducers/cartDataReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ userReducer, dataReducer, getCartDatareducer })

export const store = createStore(rootReducer, applyMiddleware(thunk));
