import { createStore } from "redux";
import { counterReducer } from "./reducers/counter";



export const counterStore = () => {
  const store = createStore(counterReducer);
  return store;
};