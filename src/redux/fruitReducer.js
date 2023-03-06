import { buy_fruit, add_fruit } from "./fruitTypes";

const fruitState = {
  numberOfFruits: 10
}

const fruitReducer = (state = fruitState,action)=>{

switch (action.type) {
  case buy_fruit: return{
    ...state,
    numberOfFruits: state.numberOfFruits - 1
  }

  case add_fruit: return{
    ...state,
    numberOfFruits: state.numberOfFruits + 1
  }

default: return state
}
}

export default fruitReducer;
