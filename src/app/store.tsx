import { combineReducers, createStore } from "redux";
import { carsReducer, initialCars } from "../features/carsReducer/carsReducer";

export const store = createStore(
  combineReducers({
    cars: carsReducer,
  }),
  {
    cars: initialCars,
  }
);
