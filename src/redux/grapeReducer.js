import { buy_grape, add_grape } from "./grapeTypes";

const grapeState = {
  numberOfGrapes: 20
}

const grapeReducer = (state = grapeState,action)=>{

switch (action.type) {
  case buy_grape: return{
    ...state,
    numberOfGrapes: state.numberOfGrapes - 1
  }

  case add_grape: return{
    ...state,
    numberOfGrapes: state.numberOfGrapes + 1
  }

default: return state
}
}

export default grapeReducer;
