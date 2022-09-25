import {combineReducers} from "@reduxjs/toolkit";
import todoReducer from "./screens/todo";

const rootReducer = combineReducers({
  todo: todoReducer
});

export default rootReducer