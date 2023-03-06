import { buy_fruit, add_fruit } from "./fruitTypes";

export const buyFruit = ()=> {
  return {
    type: buy_fruit
  }
}

export const addFruit = ()=>{
  return {
    type: add_fruit
  }
}
