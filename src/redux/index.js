import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counter";

const reducers = combineReducers({
  counterReducer: counterReducer,
})

export const combineStore = () => {
  const store = createStore(reducers);
  return store;
};