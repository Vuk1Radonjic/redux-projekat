import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: null/*, isAdded: null, isRemoved: null */};

createSlice({
  name: "products",
  initialState,
  /*reducers: {
    addProducts(state) {
      if (state.isAdded) {
        console.log("Added!");
        //state.items.push(new product);
      }
    },
    removeProducts(state) {
      if (state.isRemoved) {
        //state.items.remove(new product);
        console.log("Removed!");
      }
    },
    showProducts(items) {},
  }*/
});

const productSaver = (state=initialState/*, action*/) => {
  console.log(initialState);
  /*if (action.type === "Add") {
    return state.isAdded = true;
  }
  if (action.type === "Remove") {
    return state.isRemoved = true;
  }*/
  return state;
};

const store = createStore(productSaver);

export default store;