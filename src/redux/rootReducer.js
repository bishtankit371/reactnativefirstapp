import { combineReducers } from "redux";
import fruitReducer from "./fruitReducer";
import grapeReducer from "./grapeReducer";
import melonReducer from "./melonReducer";

const rootReducer = combineReducers({
  fruit: fruitReducer,
  grape: grapeReducer,
  melon: melonReducer
})

export default rootReducer;
