import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";

const reducer = combineReducers({
  expenses: expenseReducer,
});
const initalState = {};
const store = createStore(reducer, initalState);
export default store;
