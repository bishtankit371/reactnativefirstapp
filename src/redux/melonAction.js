import { buy_melon, add_melon } from "./melonTypes";

export const buyMelon = ()=> {
  return {
    type: buy_melon
  }
}

export const addMelon = ()=>{
  return {
    type: add_melon
  }
}
