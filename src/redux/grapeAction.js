import { buy_grape, add_grape } from "./grapeTypes";

export const buyGrape = ()=> {
  return {
    type: buy_grape
  }
}

export const addGrape = ()=>{
  return {
    type: add_grape
  }
}
