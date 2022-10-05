import { combineReducers, createStore } from "redux";
import { carsReducer } from "../features/carsReducer/carsReducer";

export const store = createStore(combineReducers({
    cars:carsReducer,
}))