import {
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    RESET_COUNTER,
  } from "../types/counter";
  
  const INITIAL_STATE = {
    counter: 0,
  };
  
  export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case INCREASE_COUNTER:
        return { ...state, counter: state.counter + 1 };
      case DECREASE_COUNTER:
        return { ...state, counter: state.counter - 1 };
      case RESET_COUNTER:
        return { ...state, counter: 0 };
      default:
        return state;
    }
  };