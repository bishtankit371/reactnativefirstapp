import { buy_melon, add_melon } from "./melonTypes";

const melonState = {
  numberOfMelons: 30
}

const melonReducer = (state = melonState,action)=>{

switch (action.type) {
  case buy_melon: return{
    ...state,
    numberOfMelons: state.numberOfMelons - 1
  }

  case add_melon: return{
    ...state,
    numberOfMelons: state.numberOfMelons + 1
  }

default: return state
}
}

export default melonReducer;
