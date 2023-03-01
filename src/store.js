import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk"
import productReducer from "./reducers/products";

const store = createStore(productReducer, applyMiddleware(thunk));

export default store;