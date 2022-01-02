import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counter";
import { todoReducer } from "./reducers/todo";

const reducers = combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer,
})

export const combineStore = () => {
  const store = createStore(reducers);
  return store;
};