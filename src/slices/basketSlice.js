import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
};

const reduce = (array, callback, initialValue) => {
  let accumulator = initialValue;
  for (let i= 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // using dispatch(addToBasket(product)) as our example, dispatch is the reducer, 
      // addToBasket serves as the carrier (carried the product to our store) of the state.
      // the state as is, is immutable, this is why we clone the product, to allow mutation 
      // meaning if action.payload was the only value we couldnt keep track of previous ones only update
      // actions are JS objects that define state changes, state chages are triggered through reducers
      // action.payload is the contents of the product we are mutating.
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index,1)
      } else {
        console.warn(`Cant remove product (id: ${action.payload.id}) as its not in the basket.`)
      };

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => reduce(state.basket.items, (accumulator, item) => accumulator + item.price, 0);


export default basketSlice.reducer;
